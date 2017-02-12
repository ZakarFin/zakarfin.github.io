---
title: "JFokus 2017"
layout : default
description : Memos/thoughts on JFokus 2017 talks
---

<div class="jumbotron">
    <h1>JFokus 6-8 February 2017</h1>

    JFokus is Sweden's largest developer conference with developers from all over the world (most from Sweden and Finland).

    The schedule/talks can be found at [https://www.jfokus.se/jfokus/schedule.jsp](https://www.jfokus.se/jfokus/schedule.jsp). Videos will be up later (in March probably).
</div>

These are the talks I saw and my memos/thoughts on them. I recommend watching at least these when the videos are available (most of the slides are already available on the site):
- The DevOps disaster: 15 ways to fail at DevOps
- Java 9: Make Way for Modules!
- Expert Java 8
- Expect the Unexpected: How to Deal with Errors in Large Web Applications
- Microservice communication and integration: what are my options?
- Introduction to Machine Learning

If scoping issue with "this" in Javascript is new to you, you might also enjoy:
- JavaScript's Most Wanted

## Tuesday

### Jfokus Main Keynote: Java 9: Make Way for Modules!
Mark Reinhold, Oracle

- Introduction to Java 9 module system
- A lot of work on doing language changes with backwards compatibility
- The core of Java has been separated to small modules
- Previously it resembled this: http://img.thedailywtf.com/images/201101/DependencyGraph.png (pic from http://thedailywtf.com/articles/The-Enterprise-Dependency)
- Now only the base-package is mandatory (like everything extending java.lang.Object)
- Classpath is problematic. Modules are here to help.
- Modules defined with module-info.java (much like package-info.java)
- Modules can export and import functionality (much like OSGI, but syntax is more like ES6 import/export statements in Javascript - very clean looking)
- Module-infos can be added for future proofing even if they are not used.
- There will be a tool in the JDK for packaging the app-specific (streamlined) JRE with an application.

### Expert Java 8
Nicolai Parlog, CodeFX

- How to handle exceptions with Streams
- Throwing an exception will result in stopping the stream from processing
- Lot's of ways of doing this like "Hiding the bomb" in a stream
- To pass information about the exception AND go on processing the stream you should use something like:

    public Try<String,IOException> readLine();

- Needs a lib like http://www.javaslang.io
- Optional-value - lot's of opinions in the community whether to use optional as return types/parameters/at all.

### Turbo Charge CPU Utilization in Fork/Join Using the ManagedBlocker
Heinz Kabutz, JavaSpecialists.EU

- How to utilize the processor cores fully - Using the fork/join calls and ManagedBlocker.
- Useful for batch-jobs - not so for web-apps: in web-apps we don't want one user/task to hog all the CPU.

### The DevOps disaster: 15 ways to fail at DevOps
Bert Jan Schrijver, JPoint

- Defining "What is DevOps" -> Culture
- Not about tools, technology, automation, continuous delivery/deployment
- In a nutshell it's culture of collaboration and team effort with shared goal.
- As a developer it's not enough to hand out the code to ops for deployment.
- Need to be there for the entire lifecycle of the product.
- Everyones involved: developers, ops, testing, management

### Expect the Unexpected: How to Deal with Errors in Large Web Applications
Mats Bryntse, Bryntum

- Detecting and logging errors in Javascript at runtime
- You can even produce a video of the bug using DOM MutationObserver
- https://therootcause.io

### JavaScript's Most Wanted
Todd Gardner, TrackJS

- Introduced the most common types of errors in Javascript programs
- scope of "this", "cannot call function xyz of undefined" etc.
- Kind of basic Javascript
- https://trackjs.com

### Java 9 - Beyond Contention!
Monica Beckwith, Code Karam LLC

- Really hard-code performance analysis overview
- How the performance has improved from Java 8 to 9 when using the synchronized keyword
- Multiple threads competing to access synchronized resource - "contested lock"
- "Make sure you are measuring the right thing"
- Used the Oracle Developer Studio Performance Tools for analyzing
- http://www.oracle.com/technetwork/articles/servers-storage-dev/studio-perf-tools-2293552.html
- "just look at the assembly code, it's really easy"

## Wednesday

### Deep Learning on Java
Breandan Considine

- Machine learning from introduction to the "deep end of the pool"
- How to teach the computer
- What is "three"? What is "swedish"?

### Typed JavaScript with TypeScript, Flow and Elm
Oliver Zeigermann

- TypeScript is powerful for new software
- FlowType is easier to include on existing software
- Elm is a world of it's own: scala-like syntax with everything is immutable

### Microservice communication and integration: what are my options?
Katherine Stanley, IBM

- Different styles to implement communication between microservices:
  - service-proxy
  - client side routing
  - API gateway
  - sync/async messaging
  - Being a good API consumer/producer
  - versioning: nobody gets it right the first time
- Gameon "practicing with a game - how to handle different scenarios"

### Introduction to Machine Learning
James Ward, Salesforce.com

- How to do a recommendation engine for properties based on user likes
- SparkML with Scala

### Java libraries you can't afford to miss
Andres Almiray, Canoo Engineering AG

- A couple of interesting ones for testing at least.
- Need to check the names of the libs when the video is online.

### The joy and misery of connecting a car to the internet
Niklas Gawell, Springworks AB

- There's a lot of inputs and outputs in cars.
- OBD-port for reading the car
- "standard", but only a small percentage of common functionalities are implemented by manufacturers
- Challenge: how to identify which car we are using - what are the implemented functionalities that we can use?
- Can we detect car starting from ignition or should we use tachometer and RPM?

### Closing keynote: Blah blah Microservices blah blah
Jonas Bonér, Lightbend Inc.

- Microservices ~ microliths
- Pretty deep and fundamental "lecture" about reactive systems
