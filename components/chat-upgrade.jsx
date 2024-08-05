import { useState } from 'react';

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { LoginDlg } from '@/components/login';
import { Spinner } from '@/components/ui/spinner';
import { Badge } from '@/components/ui/badge';

export function ChatUpgrade({ children, open, onOpenChange = () => { } }) {
    const { isUpgraded = false, plan, referrals = {}, trialAvailable = false, customerId } = {};

    const [isRedirecting, setRedirecting] = useState(false);

    const handleUpgrade = async () => {
       
    };

    const [isLoggingIn, setLogginIn] = useState(false);

    return (<>
        <Dialog open={open && !isLoggingIn} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[800px] px-8 py-8 max-h-dvh overflow-y-auto">
                <div className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-1">
                        <p className="text-[25px] font-bold">Upgrade for more stories!</p>
                        <p className="text-muted-foreground text-[16px] max-w-[60%]">Unlock all features including longer stories, different voice actors, and more.</p>
                    </div>
                    <div className="w-full rounded-lg border">
                        <div className="text-right pr-3 pt-3">
                            <Badge variant="outline" className="px-3 py-2 border-black">Summer sale</Badge>
                        </div>
                        <div className="grid w-full items-start gap-10 p-6 pt-0 md:grid-cols-[1fr_200px]">
                            <div className="grid gap-6">
                                <h3 className="text-xl font-bold sm:text-2xl">
                                    What&apos;s included in the PRO plan
                                </h3>
                                <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><p className="max-w-48 md:max-w-40">Expert level story writer</p>
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><p className="max-w-48 md:max-w-40">42 short, medium, or long stories per month</p>
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><p className="max-w-48 md:max-w-40">Unlimited voice narrations</p>
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><p className="max-w-48 md:max-w-40">6 unique voice actors</p>
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><p className="max-w-48 md:max-w-40">Access to our full library of background songs</p>
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><p className="max-w-48 md:max-w-40">Download story audio</p>
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg><p className="max-w-48 md:max-w-40">Email priority support</p>
                                    </li>
                                    <li className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        <p className="max-w-48 md:max-w-40">
                                            Supported languages: English, Arabic, Chinese, French, German, Greek, Hebrew, Hindi, Indonesian, Italian, Japanese, Korean, Portuguese, Russian, Spanish, Thai, Vietnamese
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col gap-4 text-center">
                                <div>
                                    <div className="text-center relative">
                                        <span className="text-muted-foreground line-through absolute text-[3.5rem] left-0 xxxs:left-[10%] xxs:left-[15%] xs:left-[22%] sm:left-[27%] md:left-[-1.2rem]">$9</span>
                                        <h4 className="text-7xl font-bold">$6</h4>
                                    </div>
                                    <p className="text-sm font-medium text-muted-foreground">Billed Monthly</p>
                                </div>
                                {!!plan ?
                                    <button disabled={isUpgraded} onClick={handleUpgrade}
                                        className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md">
                                        Get Started {isRedirecting && <>&nbsp;<Spinner /></>}
                                    </button> :
                                    <LoginDlg onLoginSuccess={() => window.location.reload()}>
                                        <button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md">
                                            Get Started
                                        </button>
                                    </LoginDlg>}
                            </div>
                        </div>
                    </div>
                    <div className="grid w-full items-start gap-10 rounded-lg border p-6 md:grid-cols-[1fr_200px]">
                        <div className="grid gap-6">
                            <h3 className="text-xl font-bold sm:text-2xl">
                                What&apos;s included in the FREE plan
                            </h3>
                            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg><p className="max-w-48 md:max-w-40">Basic level story writer</p>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg><p className="max-w-48 md:max-w-40">7 short stories per month</p>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg><p className="max-w-48 md:max-w-40">Unlimited voice narrations</p>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg><p className="max-w-48 md:max-w-40">2 voice actors</p>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg><p className="max-w-48 md:max-w-40">Choose from 2 background songs</p>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg><p className="max-w-48 md:max-w-40">Email support</p>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <p className="max-w-48 md:max-w-40">
                                        Supported languages: English, Spanish
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 text-center">
                            <div>
                                <h4 className="text-7xl font-bold">$0</h4>
                                <p className="text-sm font-medium text-muted-foreground">Billed Monthly</p>
                            </div>
                            <button disabled={!!plan} onClick={() => setLogginIn(true)}
                                className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
        <LoginDlg open={isLoggingIn} onLoginSuccess={() => window.location.reload()}></LoginDlg>
    </>)
}
