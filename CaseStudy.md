# PubNative Case Study...


# Part 1:

After reading the documentation, I concluded that the main functions of this API is to get the necessary data from publishers to PubNative so that we can easily configure and add native, banner, and or video advertising to their apps. The API allows us to also identify where the ad request is coming from, and at the same time we can also make sure that we maximise the impressions an ad has, by providing the parameters to help publishers narrow their targeted criteria down in real-time.

# Part 2:

I would start of by testing the happy scenario, testing it with a request that has all the expected data in it, and to test that the response i got was that of what was expected. Then i will test the alternative and negative scenarios, sending requests with incomplete and or incorrect data for the required parameters then check the according expected responses, it can be done using Postman at first when testing it manually, but I would definitely automate this part where I will implement the “Shift left” agile methodology and start testing early on, I would create a framework that will involve all these scenarios and integrate it with Jenkins and GitHub so that it will run all the levels of the test pyramid first “Unit, Integration, UI” to make sure that the new functionality that we want to merge into “origin master” doesn’t break anything, This process will run every time we merge a ticket/story that we worked on, this will allow us to only successfully merge if everything passes, and this will also make sure that we can deliver with confidence and speed by eliminating the need for heavy manual regression testing before each release, as we are assured that the code we are releasing is clean. QA’s will only need to do a quick re-test/sanity-test of all the tickets that are to be released in an AWS instance of our application. 

