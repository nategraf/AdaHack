# Something Something Something Docker!

## What is Docker?
**Docker**, among other things, is an engine to run aplications in a self-contained portable environemnt called a **container**.

A **container** is a sandbox environment with everything your application needs. What happens in a container stays in the container.

An **image** is the blueprint used to build a container, created by taking a snapshot of a container to clone.

### Wait, what?
So imagine that you bought a brand new computer and installed a fresh copy of the OS. Then you installed all the tools and utilities you need, such as the Java or Python runtime, and added your compiled application or script. If you remove the hard drive out of that computer and put it into another computer, you can boot the new computer and run your application just like on your previous computer. In fact, you could clone that hard drive and place those clones into any number of new computers and they will all launch the same, and be able to run your application.

In that metaphor, the hard drive is an **image** and each computer that you place the cloned hard drive into is a **container**. Every container created from the same image will be a clone of the origonal, but act just like an independent computer. This metaphor is not 100% accurate, but our purposes, it'll explain all you need to know.

## I want it!
Here are the links to get Docker for:
* [Linux](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* [MacOS](https://docs.docker.com/docker-for-mac/install/)
* [Windows](https://docs.docker.com/docker-for-windows/install/)

Make sure Docker works by running `docker version` (On Linux and Mac you will need to use `sudo`. On Windows, run as Administrator)

You should see something like:
```
Client:
 Version:           18.06.0-ce
 API version:       1.38
 Go version:        go1.10.3
 Git commit:        0ffa825
 Built:             Wed Jul 18 19:09:56 2018
 OS/Arch:           linux/amd64
 Experimental:      false

Server:
 Engine:
  Version:          18.06.0-ce
  API version:      1.38 (minimum version 1.12)
  Go version:       go1.10.3
  Git commit:       0ffa825
  Built:            Wed Jul 18 19:07:55 2018
  OS/Arch:          linux/amd64
  Experimental:     false
```

## Let's get to it!
Use `docker help` at any point for more info on the commands shown here

### Hello World!
Download your first image with `docker pull hello-world`

This will go to [DockerHub](https://hub.docker.com/) and download the image named ["hello-world"](https://hub.docker.com/_/hello-world/)

You can see all the images you have downloaded with `docker image ls`
```
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
hello-world         latest              2cb0d9787c4d        8 weeks ago         1.85kB
```

Now run "hello-world" with `docker run hello-world`!

**Boom**, you just ran a container!

### Ubuntu
Now let's run something a little more useful with the official ["ubuntu"](https://hub.docker.com/_/ubuntu/) image.

Run `docker run -it ubuntu` you you will see a prompt for an interactive [`sh`](https://en.wikipedia.org/wiki/Unix_shell) session.

`docker run -it` is short for `docker run --interactive --tty` which you can read more about with `docker help run` if you are curious, but the gist is that it allows you to interact with the container while it is running.

The container is effectivly a seperate computer, the **guest**, running inside of your computer, the **host**. All of the crucial Linux utilities and [`apt`](https://help.ubuntu.com/lts/serverguide/apt.html.en), which you can use to install anything you need.

### Apache
Let's run a website with Apache HTTPd and PHP7 without installing anything!

For this we are going to use ["nimmis/apache-php7"](https://hub.docker.com/r/nimmis/apache-php7/), and host a little php site I've included in the "apache" directory.

Run `dk run -p 8080:80 -v $PWD/apache/:/var/www/html nimmis/apache-php7` and once it's running, navigate to "localhost:8080" in your browser or run `curl localhost:8080` to see a fully functional website!

Let me explain those two new options `-p` and `-v` as they are very useful:
* `-p` is short for [`--publish`](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose) and forwards a network port on the host to the container. In this case host-port 8080 is forwarded to container-port 80, allowing "localhost:8080" to reach the web server running inside the container.
* `-v` is short for [`--volume`](https://docs.docker.com/engine/reference/commandline/run/#add-bind-mounts-or-volumes-using-the---mount-flag) and mounts a folder on the host to a folder in the container, which allows the conatiner to access those files. In this case we make the files availible at "$PWD/apache" availible as "/var/www/html" in the container.

### Python
### Wait, but what about... 
Check out the [offcial "getting started" page](https://docs.docker.com/get-started/#recap-and-cheat-sheet)

Or for a very detailed command information check out the [Docker engine reference](https://docs.docker.com/engine/reference/commandline/cli/)

## Building blocks
## More containers!
