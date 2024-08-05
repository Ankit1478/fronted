import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Page() {
    return (
       <div>
        <Navbar></Navbar>
        <div>
             <div className="flex mx-auto">
            <div className="flex flex-1 pt-10 mt-14 px-10 md:px-20">
                <div className="flex flex-col items-center gap-2 w-full">
                    <h1 className=" font-light text-primary text-[24px] sm:text-[24px] lg:text-[40px] max-w-full">
                        Manage Subscription
                    </h1>
                    <div className="flex flex-col items-center gap-9">
                        <span className="mt-2 px-4 font-sans text-primary text-16px font-normal">
                            Choose the plan that works for you.
                        </span>
                        <Tabs defaultValue="monthly" className="flex flex-col items-center gap-4 mt-2">
                            <TabsList className="flex space-x-2 bg-transparent">
                                <TabsTrigger value="monthly"
                                    className="font-sans font-medium px-4 py-2 min-w-20 rounded-md text-base data-[state=active]:bg-primary data-[state=active]:text-white" 
                                >
                                    Monthly billing
                                </TabsTrigger>
                                <TabsTrigger value="yearly"
                                    className="font-sans font-medium px-4 py-2 min-w-20 rounded-md text-base data-[state=active]:bg-primary data-[state=active]:text-white"
                                >
                                    Yearly billing
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="monthly">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                                    <div className="max-w-sm mx-auto bg-gray-200 text-primary rounded-lg shadow-lg p-6 " style={{width: '326px', height: '420px'}}>
                                        <h2 className=" text-lg font-semibold mb-4">Basic Plan</h2>
                                        <div className=" text-3xl font-semibold mb-1">
                                            $0<span className=" text-xl font-medium mb-8">/month</span>
                                        </div>
                                        <Button className="w-full text-md font-semibold py-5 rounded-full mb-3 mt-4 h-auto">
                                            Active
                                        </Button>
                                        <div className="h-[40px]"></div>
                                        <ul className="text-sm space-y-2">
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">50 credits renew daily (10 songs)</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Non-commercial terms</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">No credit top ups</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Shared generation queue</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">2 running jobs at once</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-w-sm mx-auto bg-gray-200 text-primary rounded-lg shadow-lg p-6 " style={{width: '326px', height: '420px'}}>
                                        <h2 className=" text-lg font-semibold mb-4">Pro Plan</h2>
                                        <div className=" text-3xl font-semibold mb-1">
                                            $10<span className=" text-xl font-medium mb-8">/month</span>
                                        </div>
                                        <Button className="w-full text-md font-semibold py-5 rounded-full mb-3 mt-4 h-auto">
                                            Subscribe
                                        </Button>
                                        <button className="w-full hover:underline font-sans text-primary text-sm mb-4 font-bold">Save with yearly billing (20% off)</button>
                                        <ul className="text-sm space-y-2">
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">2,500 credits renew monthly (500 songs)</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">General commercial terms</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Optional credit top ups</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Priority generation queue</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">10 running jobs at once</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-w-sm mx-auto bg-gray-200 text-primary rounded-lg shadow-lg p-6 " style={{width: '326px', height: '420px'}}>
                                        <h2 className=" text-lg font-semibold mb-4">Premier Plan</h2>
                                        <div className=" text-3xl font-semibold mb-1">
                                            $30<span className=" text-xl font-medium mb-8">/month</span>
                                        </div>
                                        <Button className="w-full text-md font-semibold py-5 rounded-full mb-3 mt-4 h-auto">
                                            Subscribe
                                        </Button>
                                        <button className="w-full hover:underline font-sans text-primary text-sm mb-4 font-bold">Save with yearly billing (20% off)</button>
                                        <ul className="text-sm space-y-2">
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">10,000 credits renew monthly (2,000 songs)</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">General commercial terms</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Optional credit top ups</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Priority generation queue</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">10 running jobs at once</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mx-auto bg-gray-200 text-primary rounded-lg shadow-lg p-6" style={{width: '326px'}}>
                                        <h2 className=" text-lg font-semibold mb-8">Need more?</h2>
                                        <Button className="w-full text-md font-semibold rounded-full p-4 mb-10 mt-[40px] h-auto">
                                            Contact Us
                                        </Button>
                                        <ul className="text-sm space-y-2">
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Custom credit amounts</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">General commercial terms</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Custom top ups</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Custom generation queue</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">More concurrent generations</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="yearly">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="max-w-sm mx-auto bg-gray-200 text-primary rounded-lg shadow-lg p-6 " style={{width: '326px', height: '420px'}}>
                                        <h2 className=" text-lg font-semibold mb-4">Basic Plan</h2>
                                        <div className=" text-3xl font-semibold mb-1">
                                            $0<span className=" text-xl font-medium mb-8">/year</span>
                                        </div>
                                        <Button className="w-full text-md font-semibold py-5 rounded-full mb-3 mt-4 h-auto">
                                            Active
                                        </Button>
                                        <div className="h-[40px]"></div>
                                        <ul className="text-sm space-y-2">
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">50 credits renew daily (10 songs)</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Non-commercial terms</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">No credit top ups</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Shared generation queue</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">2 running jobs at once</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-w-sm mx-auto bg-gray-200 text-primary rounded-lg shadow-lg p-6 " style={{width: '326px', height: '420px'}}>
                                        <h2 className=" text-lg font-semibold mb-4">Pro Plan</h2>
                                        <div className=" text-3xl font-semibold mb-1">
                                            $96<span className=" text-xl font-medium mb-8">/year</span>
                                        </div>
                                        <Button className="w-full text-md font-semibold py-5 rounded-full mb-3 mt-4 h-auto">
                                            Subscribe
                                        </Button>
                                        <button className="w-full hover:underline font-sans text-primary text-sm mb-4 font-bold">Switch to monthly billing</button>
                                        <ul className="text-sm space-y-2">
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">2,500 credits renew monthly (500 songs)</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">General commercial terms</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Optional credit top ups</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Priority generation queue</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">10 running jobs at once</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="max-w-sm mx-auto bg-gray-200 text-primary rounded-lg shadow-lg p-6 " style={{width: '326px', height: '420px'}}>
                                        <h2 className=" text-lg font-semibold mb-4">Premier Plan</h2>
                                        <div className=" text-3xl font-semibold mb-1">
                                            $288<span className=" text-xl font-medium mb-8">/year</span>
                                        </div>
                                        <Button className="w-full text-md font-semibold py-5 rounded-full mb-3 mt-4 h-auto">
                                            Subscribe
                                        </Button>
                                        <button className="w-full hover:underline font-sans text-primary text-sm mb-4 font-bold">Switch to monthly billing</button>
                                        <ul className="text-sm space-y-2">
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">10,000 credits renew monthly (2,000 songs)</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">General commercial terms</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Optional credit top ups</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Priority generation queue</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">10 running jobs at once</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mx-auto bg-gray-200 text-primary rounded-lg shadow-lg p-6" style={{width: '326px'}}>
                                        <h2 className=" text-lg font-semibold mb-8">Need more?</h2>
                                        <Button className="w-full text-md font-semibold rounded-full p-4 mb-10 mt-[40px] h-auto">
                                            Contact Us
                                        </Button>
                                        <ul className="text-sm space-y-2">
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Custom credit amounts</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">General commercial terms</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Custom top ups</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">Custom generation queue</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <span className="font-sans text-primary">•</span>
                                                <span className="font-sans text-primary">More concurrent generations</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <p className="text-sm my-4 py-4 max-w-[650px]">
                            Credits included in subscriptions do not carry over from day to day or month to month. Purchased top up credits do not expire, but require an active subscription to use. See the <a className="chakra-link css-47t1jm" href="https://suno.com/legal/terms">terms of service</a> for limitations on commercial use. Email us at <a className="chakra-link css-47t1jm" href="mailto:billing@suno.com">billing@suno.com</a> with any questions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
       </div>
    );
}