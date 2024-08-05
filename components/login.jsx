import React from 'react';
import { useForm } from 'react-hook-form';
import {
  get,
  ref as databaseRef,
  getDatabase,
  set,
  update,
} from 'firebase/database';
import {
  LoaderCircle,
} from "lucide-react";
import moment from 'moment';
import { zodResolver } from "@hookform/resolvers/zod";
import { isChrome, isMobile, isSafari } from 'react-device-detect';
import { z } from "zod";
import { sendGTMEvent } from '@next/third-parties/google';

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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSidebar } from '@/lib/hooks/use-sidebar';
import { encrypt } from '@/app/actions';
import { cn, decrypt } from '@/lib/utils';

const initiateNewUser = async (user) => {
  const database = getDatabase();

  let storyLimit = await get(databaseRef(database, `users/${user.uid}/storyLimit`)).then((snapshot) => snapshot.val());

  if (storyLimit == null) {
    await update(databaseRef(database, `users/${user.uid}`), {
      storyLimit: 7,
      storyLimitResetsOn: moment().add(1, 'months').valueOf(),
      isNewUser: true,
    });

    if (new URLSearchParams(window.location.search)?.get('referral')) {
      const isValid = await fetch(`server/firebase/auth/get-users`, {
        method: 'POST',
        body: JSON.stringify([{ uid: new URLSearchParams(window.location.search).get('referral') }]),
      }).then((res) => res.json());

      if (isValid) {
        set(databaseRef(database, `users/${new URLSearchParams(window.location.search).get('referral')}/referrals/${user.uid}`), user.uid);
      }
    }

    fetch('/server/meta/conversions', {
      method: 'POST',
      body: JSON.stringify({
        event_name: 'Lead',
        event_source_url: window.location.href,
        action_source: 'website',
        user_data: {
          em: user.email,
          fn: user.displayName?.split(' ')?.slice(0, user.displayName?.split(' ').length - 1)?.join(' '),
          ln: user.displayName?.split(' ')?.[user.displayName?.split(' ').length - 1],
          // ge, Gender
          // db, Date of Birdth
        },
      }),
    });

    sendGTMEvent({ event: 'signup' });
  }
};

export function LoginDlg({
  children,
  open,
  onOpenChange = () => { },
  onLoginSuccess = async () => { },
  emailLoginPayload = {},
}) {

  const form = useForm({
    resolver: zodResolver(z.object({
      email: z
        .string()
        .email("Email is not valid")
    })),
    mode: 'onSubmit',
  });

  const [loading, setLoading] = React.useState();
  const [verifyEmail, setVerifyEmail] = React.useState(false);

  const handleOpenChange = (open) => {
    if (open) setVerifyEmail(false);
    onOpenChange(open);
  };

  const sendEmailVerification = async (email) => {

  };

  const handleEmailSignin = async ({ email }) => {

  };

  const handleGoogleSignin = async () => {

  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className={cn(
        isMobile && (isChrome || isSafari) ? "top-[30%]" : "top-[50%]",
        "sm:max-w-[425px] sm:top-[50%]",
      )}>
        {verifyEmail ? <DialogHeader>
          <DialogTitle className="text-xl">Please verify link send to your email.</DialogTitle>
          <DialogDescription className="w-full flex justify-center">
            Didn&apos;t receive it?&nbsp;
            <Button variant="link" className="h-5 p-0">Resend link</Button>
          </DialogDescription>
        </DialogHeader> : <>
          <DialogHeader>
            <DialogTitle className="text-2xl">Login</DialogTitle>
            <DialogDescription>
              Enter your email below to login to your account
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleEmailSignin)}>
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormField
                      control={form.control}
                      name="email"
                      defaultValue=""
                      render={({ field }) => (
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                          required
                          {...field} />
                      )} />
                  </FormItem>
                  <Button type="submit" className="w-full mt-4">
                    {loading == 'email' ? <LoaderCircle className="animate-spin w-6 h-6" /> : 'Login'}
                  </Button>
                </form>
              </Form>
            </div>
            <Button variant="outline" className="w-full" onClick={handleGoogleSignin}>
              {loading == 'google' ? <LoaderCircle className="animate-spin w-6 h-6" /> : 'Login with Google'}
            </Button>
          </div>
        </>}
      </DialogContent>
    </Dialog>
  )
}