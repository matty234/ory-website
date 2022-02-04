---
path: '/freedom-on-the-internet/'
publishedAt: '2022-02-04'

author: benehiko

title: 'Purge ads, trackers and malicious actors'
teaser: |
Block ads, trackers and malicious actors on the network level without hurting your wallet

subtitle: >
Host your own dns server on the cloud (Part I)

overline: >
AdGuard Home on Oracle Cloud (free-tier)
---


## Preface

Ads, pesky trackers and malicious actors are littered all over the internet. I bet you are already thinking of just using an Adblocker extension or are already doing it? There seem to be many Adblocker extensions out there and services that claim to protect your privacy online. [Duckduckgo](https://duckduckgo.com/app) for instance claims to protect you from trackers when using their app or browser extension. All of these are fair points, but is there a way to block them across your entire network?

Enter blocking websites on the network level using DNS. Now I know what you are going to say, you just use [Google's 8.8.8.8](https://developers.google.com/speed/public-dns) or [Cloudflare 1.1.1.1](https://www.cloudflare.com/en-gb/learning/dns/what-is-1.1.1.1/) as they promise security and speed. Or maybe you are even more adventurous and use [Quad9's 9.9.9.9](https://www.quad9.net/).

So then what's the point of this article? Well, we can get the best of all of the above mentioned and the best of all, you are certain of the log retention policies and which sites are blocked for which client. You have full control over your own home network.

[AdGuardHome](https://github.com/AdguardTeam/AdGuardHome) allows us to set up our own web filters as well as upstream servers (such as Cloudflare or Quad9). It even allows us to block certain clients from accessing certain websites and vice versa. It also has a low memory footprint so it can run on almost anything.

## Step 0: Before we start

This article is quite lengthy and goes into quite some detail on how to setup [AdGuardHome](https://github.com/AdguardTeam/AdGuardHome) with the assumptions that you do not know anything about DNS nor anything about hosting your own application.

Since I don't want you to be bored, I have segmented the document into headings that are explicit to their intent so that you can quickly jump to the sections you care about.

## Step 1: Plan where you will run AdGuardHome

There are a couple of routes we can go with setting up AdGuardHome, we can either run it locally on an old machine at home, an ARM-based machine such as a RaspberryPi or a virtual private server (VPS).

In this article, I wanted to make it more interesting and run AdGuardHome on a VPS since we can use the server outside the scope of our home and thus, AdGuardHome becomes AdGuardAnywhere ;).

There are a couple of cloud providers out there but I took quite an interest in [Oracle Clouds Arm Ampere free tier](https://www.oracle.com/cloud/free/) recently.

I then also wanted to access my DNS server from my own domain and have it accessible without the need to remember the IP address, e.g. dns.example.com.

So I bought a domain for a couple of euros and created an Oracle Cloud account.

## Step 2: Setup Oracle Cloud Arm Ampere instance

### Create instance

Navigate to your Oracle Cloud dashboard after signing up, navigate to Compute > Instances and create an instance on the [compartment](https://docs.oracle.com/en-us/iaas/Content/Identity/Tasks/managingcompartments.htm) you have created. Take your time here as you will need to select the correct operating system image and "shape" (basically the machine type). We want to use Ubuntu 20.04 as the image and Ampere 1 OCPU and 1GB Memory. This will be enough to run AdGuard on. There is also an option to "Add SSH keys" to your VPS, it is important to generate a key pair and download it immediately. When the private key is lost you won't be able to connect to your VPS again and will need to recreate the instance. **Also, note that it is important to store the private key in a safe place as anyone who has this key can connect to your VPS.**

Oracle Cloud will also create for us a new [virtual cloud network (VCN)](https://docs.oracle.com/en-us/iaas/Content/Network/Tasks/managingVCNs.htm#VCNs_and_Subnets) which will automatically create a public IP address for the VPS. We want to use this IP address later to point to our domain through the A record.

### Attach IPv6 Address

Next, we will also create an IPv6 address which we will add to the domains AAAA record.

Go to your instance > and select "Virtual cloud network" under the "Instance details". You will then see an option "CIDR Blocks" on the left panel. Select it and "Add IPv6 CIDR Block" and select "Enable".

Now navigate back to your Virtual Cloud Networks (VCNs) and select the subnet you have attached to the network. Select the "Edit" button on the subnet and now select "Enable IPv6 CIDR Block". Add any two hex characters into the input box and select "Save Changes".

Navigate to the instance you created, select "Attached VNICs" and select "IPV6 Addresses" then "Assign IPv6 Address".

### Network Rules

We will need to open a couple of ports for AdGuard to work. Some of the ports we will close after the initial setup (such as port 3000).

Navigate to your "Virtual Cloud Networks" again and select the subnet you created. You will then see a "Security List" section. Here we are going to add ports that need to be allowed through the Oracle Cloud network.

Select the "Default Security List ..." and let's add a couple of Ingress Rules. We need to open ports 53, 443, 853 and 3000.


