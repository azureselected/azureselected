(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{250:function(e,t,a){"use strict";a.r(t);var i=a(19),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-your-first-model-with-custom-vision-and-python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-your-first-model-with-custom-vision-and-python"}},[e._v("#")]),e._v(" Create Your First Model with Custom Vision and Python")]),e._v(" "),a("ContentMeta"),e._v(" "),a("p",[e._v("Welcome to this first article in the AI for Developer series, in this series of articles I will share tips and tricks around Azure AI with you. My name is Henk Boelman, a Cloud Advocate at Microsoft based in the Netherlands, focusing on AI for developers.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://www.henkboelman.com/media/ii5bvxfw/image.png",alt:"img"}})]),e._v(" "),a("p",[e._v("In this first article I want to share with you how you can create a classification model using the Custom Vision service with the Python SDK.")]),e._v(" "),a("h2",{attrs:{id:"why-python-and-not-the-visual-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-python-and-not-the-visual-interface"}},[e._v("#")]),e._v(" Why Python and not the visual interface?")]),e._v(" "),a("p",[e._v("The answer to that is simple, if you build the training process in code you can version it for instance on Github. Having your code versioned means you can read back what you have done, work ina team on it and run it again if you need to.")]),e._v(" "),a("p",[e._v("Let’s dive into the code! Before we start, I assume you have "),a("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python 3.6"),a("OutboundLink")],1),e._v(" installed.")]),e._v(" "),a("h2",{attrs:{id:"create-resources-in-azure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-resources-in-azure"}},[e._v("#")]),e._v(" Create resources in Azure")]),e._v(" "),a("p",[e._v("The first thing you need to do is create an Azure Custom Vision service. If you don’t have an "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=AI4DEV01-blog-heboelma",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure subscription"),a("OutboundLink")],1),e._v(" you can get $200 credit for the first month.")]),e._v(" "),a("p",[e._v("You can create an Azure Custom Vision endpoint easily through the portal, but you can also use the "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?WT.mc_id=AI4DEV01-blog-heboelma",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),a("OutboundLink")],1),e._v(" for this. If you don' t have the "),a("a",{attrs:{href:"https://pypi.org/project/azure-cli/?WT.mc_id=AI4DEV01-blog-heboelma",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure cli"),a("OutboundLink")],1),e._v(" installed you can install it using pip.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pip install azure-cli\n")])])]),a("p",[e._v("The first step is to login to your Azure subscription, select the right subscription and create a resource group for the Custom Vision Endpoints.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az login\naz account set -s <SUBSCRIPTION_ID>\naz group create --name CustomVision_Demo-RG --location westeurope\n")])])]),a("p",[e._v("The Custom Vision Service has 2 types of endpoints. One for training the model and one for running predictions against the model.")]),e._v(" "),a("p",[e._v("Let’s create the two endpoints.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az cognitiveservices account create --name CustomVisionDemo-Prediction --resource-group CustomVision_Demo-RG --kind CustomVision.Prediction --sku S0 --location westeurope –yes\naz cognitiveservices account create --name CustomVisionDemo-Training --resource-group CustomVision_Demo-RG --kind CustomVision.Training --sku S0 --location westeurope –yes\n")])])]),a("p",[e._v("You can use the Azure CLI to easily get the training key and the prediction key for the endpoints.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az cognitiveservices account keys list --name CustomVisionDemo-Training --resource-group CustomVision_Demo-RG\naz cognitiveservices account keys list --name CustomVisionDemo-Prediction  --resource-group CustomVision_Demo-RG\n")])])]),a("p",[e._v("Now that we have created the endpoints we can start with training the model.")]),e._v(" "),a("h2",{attrs:{id:"it-all-starts-with-a-question"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#it-all-starts-with-a-question"}},[e._v("#")]),e._v(" It all starts with a question")]),e._v(" "),a("p",[e._v("Every Machine Learning journey starts with a question you want to have answered. For this example, you are going to answer the question: Is it a Homer or a Marge Lego figure.")]),e._v(" "),a("p",[e._v("Now that we know what to ask the model, we can go on to the next requirement; that is data. Our model is going to be a classification model, meaning the model will look at the picture and scores the pictures against the different classes. So, the output will be I’m 70% confident this is Homer and 1% confident that this is Marge. By taking the class with the highest score and setting a minimum threshold for the confidence score we know what is on the picture.")]),e._v(" "),a("p",[e._v("I have created a dataset for you with 50 pictures of a Homer Simpson Lego figure and 50 pictures of a Marge Simpsons Lego figure. I have taken the photos with a few things in mind, used a lot of different backgrounds and took the photos from different angles. I made sure the only object in the photo was Homer or Marge and the quality of the photos was somehow the consistent.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.henkboelman.com/media/45lkxosc/ai4dev01-dataset.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download the dataset here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"train-the-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#train-the-model"}},[e._v("#")]),e._v(" Train the model")]),e._v(" "),a("p",[e._v("For the training we are going the use the "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/python/api/overview/azure/cognitiveservices/customvision?view=azure-python&WT.mc_id=AI4DEV01-blog-heboelma",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom Vision Service Python SDK"),a("OutboundLink")],1),e._v(", you can install this package using pip.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pip install azure-cognitiveservices-vision-customvision\n")])])]),a("p",[e._v("Create a new Python file called 'train.py' and start adding code.")]),e._v(" "),a("p",[e._v("Start with importing the packages needed.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("from azure.cognitiveservices.vision.customvision.training import CustomVisionTrainingClient\nfrom azure.cognitiveservices.vision.customvision.training.models import ImageFileCreateEntry\n")])])]),a("p",[e._v("Next, create variables for the Custom Vision endpoint, Custom Vision training key and the location where the training images are stored.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('cv_endpoint = "https://westeurope.api.cognitive.microsoft.com"\ntraining_key = "<INSERT TRAINING KEY>"\ntraining_images = "LegoSimpsons/TrainingImages"\n')])])]),a("p",[e._v("To start with the training, we need to create a Training Client. This method takes as input the endpoint and the training key.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("trainer = CustomVisionTrainingClient(training_key, endpoint= cv_endpoint)\n")])])]),a("p",[e._v("Now you are ready to create your first project. The project takes a name and domain as input, the name can be anything. The domain is a different story. You can ask for a list of all possible domains and choose the one closest to what you are trying to accomplish. For instance if you are trying to classify food you pick the domain “Food” or “Landmarks” for landmarks. Use the code below to show all domains.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('for domain in trainer.get_domains():\n  print(domain.id, "\\t", domain.name) \n')])])]),a("p",[e._v("You might notice that some domains have the word “Compact” next to them. If this is the case it means the Azure Custom Vision Service will create a smaller model, which you will be able to export and run locally on your mobile phone or desktop.")]),e._v(" "),a("p",[e._v("Let’s create a new project with the domain set to “General Compact”.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('project = trainer.create_project("Lego - Simpsons - v1","0732100f-1a38-4e49-a514-c9b44c697ab5")\n')])])]),a("p",[e._v("Next you need to create tags, these tags are the same as classes mentioned above. When you have created a few tags we can tag images with them and upload the images to the Azure Custom Vision Service.")]),e._v(" "),a("p",[e._v("Our images are sorted per tag/class in a folder. All the photos of Marge are in the folder named 'Marge' and all the images of Homer are in the folder named 'Homer'.")]),e._v(" "),a("p",[e._v("In the code below we do the following steps:")]),e._v(" "),a("ul",[a("li",[e._v("We open the directory containing the folders with training images.")]),e._v(" "),a("li",[e._v("Loop through all the directories found in this folder")]),e._v(" "),a("li",[e._v("Create a new tag with the folder name")]),e._v(" "),a("li",[e._v("Open the folder containing the images")]),e._v(" "),a("li",[e._v("Create, for every image in that folder, an ImageFileEntry that contains the filename, file content and the tag.")]),e._v(" "),a("li",[e._v("Add this ImageFileEntry to a list.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('image_list = []\ndirectories = os.listdir(training_images)\n\nfor tagName in directories:\n \ttag = trainer.create_tag(project.id, tagName)\n \timages = os.listdir(os.path.join(training_images,tagName))\n \tfor img in images:\n \t\twith open(os.path.join(training_images,tagName,img), "rb") as image_contents:\n \t\t\timage_list.append(ImageFileCreateEntry(name=img, contents=image_contents.read(), tag_ids=[tag.id]))  \n')])])]),a("p",[e._v("Now you have a list that contains all tagged images. So far no images have been added to the Azure Custom Vision service, only the tags have been created.")]),e._v(" "),a("p",[e._v("Uploading images goes in batches with a max size of 64 images per batch. Our dataset is 100 images big, so first we need to split the list into chunks of 64 images.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("def chunks(l, n):\n \tfor i in range(0, len(l), n):\n \t\tyield l[i:i + n]\nbatchedImages = chunks(image_list, 64)\n")])])]),a("p",[e._v("Now we have our images split in batches of 64, we can upload them batch by batch to the Azure Custom Vision Service. "),a("em",[e._v("Note: This can take a while!")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("for batchOfImages in batchedImages:\n \tupload_result = trainer.create_images_from_files(project.id, images=batchOfImages)\n")])])]),a("p",[e._v("From this point, there are only two steps remaining before you can access the model through an API endpoint. First you need to train the model and finally you must publish the model, so it is accessible through a prediction API. The training can take a while, so you can create a while loop after the train request that checks the status of the model training every second.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('import time\niteration = trainer.train_project(project.id)\nwhile (iteration.status != "Completed"):\n \titeration = trainer.get_iteration(project.id, iteration.id)\n \tprint ("Training status: " + iteration.status)\n \ttime.sleep(1)\n')])])]),a("p",[e._v("Now you have reached the final step, we can publish the model. Its then available in a prediction API and ready to be consumed from an application.")]),e._v(" "),a("p",[e._v("Every time you train your model its called an iteration. Often you have to retrain your model when you have new data or when you find out that in the real world your model is behaving different than expected.")]),e._v(" "),a("p",[e._v("The concept of the Custom Vision Service is that you can publish an iteration of your model under a specific name. This means that you can have multiple versions of your model available for your application to use, for instance you can a-b test your model very quickly with this.")]),e._v(" "),a("p",[e._v("To publish an iteration of your model you call the publish_iteration method, this method requires a few parameters.")]),e._v(" "),a("p",[e._v("Project ID and Iteration ID, these are values from the previous steps. You can choose a name for publication of your model, for instance 'latest' or 'version1 . The last parameter you need is the 'resource identifier' of the resource where you want to publish it to. This is the resource identifier of the Azure Custom Vision Prediction resource we created at the beginning with our AZ command.")]),e._v(" "),a("p",[e._v("You can use this command to retrieve all the details about the Prediction resource you created:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az cognitiveservices account show --name CustomVisionDemo-Prediction --resource-group CustomVision_Demo-RG\n")])])]),a("p",[e._v("You can copy the value that is behind the field ID, it looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/subscriptions/<SUBSCRIPTION-ID>/resourceGroups/<RESOURCE_GROUP_NAME>/providers/Microsoft.CognitiveServices/accounts/<RESOURCE_NAME>")\n')])])]),a("p",[e._v("When you have the resource ID, paste it in the variable below and call the 'publish_iteration' method.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("publish_iteration_name = ''\nresource_identifier = ''\ntrainer.publish_iteration(project.id, iteration.id, publish_iteration_name, resource_identifier)\n")])])]),a("p",[e._v("Now you have successfully trained and published your model!")]),e._v(" "),a("p",[e._v("A small recap of what have we done:")]),e._v(" "),a("ul",[a("li",[e._v("You created an Azure Resource group containing an Azure Custom Vision service training and prediction endpoint")]),e._v(" "),a("li",[e._v("You have created a new Project")]),e._v(" "),a("li",[e._v("In that project you have created tags")]),e._v(" "),a("li",[e._v("You have uploaded images in batches of 64 and tagged them")]),e._v(" "),a("li",[e._v("You have trained an iteration of your model")]),e._v(" "),a("li",[e._v("You have published the iteration to a prediction endpoint")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/hnky/AI4DEV01-CustomVision/blob/master/train.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("View the full code here"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"let-s-test-the-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-test-the-model"}},[e._v("#")]),e._v(" Let’s test the model!")]),e._v(" "),a("p",[e._v("Using the model in an application is as easy as calling an API. You could do just a json post to the endpoint, but you can also use the methods in the Custom Vision Python SDK, which will make things a lot easier.")]),e._v(" "),a("p",[e._v("Create a new file called 'predict.py'")]),e._v(" "),a("p",[e._v("Start with importing the dependencies you need to do a prediction.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("from azure.cognitiveservices.vision.customvision.prediction import CustomVisionPredictionClient\n")])])]),a("p",[e._v("The next thing you need is the prediction key. This is the key from the resource where you have published the model to. You can use this az command to list the keys")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az cognitiveservices account keys list --name CustomVisionDemo-Prediction --resource-group CustomVision_Demo-RG\n")])])]),a("p",[e._v("When you have your prediction key you can create a prediction client. For this client you also need the endpoint. You can run the az command below and copy the url behind the field “endpoint”.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az cognitiveservices account show --name CustomVisionDemo-Prediction --resource-group CustomVision_Demo-RG\n")])])]),a("p",[e._v("Now you have the prediction key and the endpoint you can create the PredictionClient.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("predictor = CustomVisionPredictionClient(prediction_key, endpoint=ENDPOINT)\n")])])]),a("p",[e._v("You have multiple options to classify an image. You can send a URL or you can send the binary image to the endpoint. By default the Azure Custom Vision service keeps a history of all the images posted to the endpoint. The images and their predictions can be reviewed in the portal and used to retrain your model. But sometimes you don’t want the images to be kept in history and therefore it is possible to disable this feature.")]),e._v(" "),a("p",[e._v("I have uploaded 2 images you can use for testing, but feel free to use a search engine to find other images of "),a("a",{attrs:{href:"https://www.bing.com/images/search?q=marge+simpson+lego",target:"_blank",rel:"noopener noreferrer"}},[e._v("Marge"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://www.bing.com/images/search?q=homer+simpson+lego",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("To classify an image using a URL and keep the history you call the 'classify_image_url' method. You give it the project id and iteration name from a few steps above and provide the URL to the image.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('results = predictor.classify_image_url(project.id,publish_iteration_name,url="https://missedprints.com/wp-content/uploads/2014/03/marge-simpson-lego-minifig.jpg")\n')])])]),a("p",[e._v("To show the score for the different classes on the screen you can use the code below to loop through the results and display the tag name and confidence score for the image.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('for prediction in results.predictions:\n \tprint("\\t" + prediction.tag_name + ": {0:.2f}%".format(prediction.probability * 100))\n')])])]),a("p",[e._v("Now you are all done and have your own classification model running in the cloud! Here is a recap of what you have achieved:")]),e._v(" "),a("ul",[a("li",[e._v("We asked a question")]),e._v(" "),a("li",[e._v("Collected data")]),e._v(" "),a("li",[e._v("Created an Azure Custom Vision Service endpoint")]),e._v(" "),a("li",[e._v("Created a new Project")]),e._v(" "),a("li",[e._v("Tagged and uploaded content")]),e._v(" "),a("li",[e._v("Trained the model")]),e._v(" "),a("li",[e._v("Published the iteration so it can be used in an API")]),e._v(" "),a("li",[e._v("Ran predictions against the model using the API")])]),e._v(" "),a("p",[e._v("In the rest of this series of articles we will use this model for different solutions! Stay tuned!")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/hnky/AI4DEV01-CustomVision/blob/master/predict.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("View the full code here"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?WT.mc_id=AI4DEV01-blog-heboelma",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to install the Azure CLI"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account-cli?WT.mc_id=AI4DEV01-blog-heboelma",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating cognitive services through the CLI"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/python/api/overview/azure/cognitiveservices/customvision?view=azure-python&WT.mc_id=AI4DEV01-blog-heboelma",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python SDK"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service?WT.mc_id=AI4DEV01-blog-heboelma",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom Vision Documentation"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);