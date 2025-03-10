"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Oval } from "react-loader-spinner";
import { Button } from "@/components/ui/button";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters.",
  }),
});

const page = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { reset } = form;
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful } = form.formState;

  const onSubmit = async (values) => {
    try {
      //   await axios.post('/api/auth/signup', values)
      //   router.push('/admin/dashboard')
      //   await signIn("Credentials", {
      //     redirect: false,
      // username: values.username,
      // password: values.password,
      //     callbackUrl: '/admin/dashboard'
      //   });
      await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirectTo: "/admin/dashboard",
      });
      router.push("/admin/dashboard");
      toast("SignIn Success");
    } catch (error) {
      toast("SignIn failed");
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-[#0A416F] p-4">
      <Card className="w-full max-w-2xl rounded-none md:rounded-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl font-bold text-[#0A416F]">
                  Sign In
                </CardTitle>
                <CardDescription>
                  Enter admin details to sign in.
                </CardDescription>
              </CardHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A416F]">
                          Username
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormDescription>Enter username here.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0A416F]">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="********"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>password here.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={!isDirty || !isValid}
                  >
                    {isSubmitting ? (
                      <div className="flex gap-3 items-center justify-center">
                        <Oval
                          visible={true}
                          height="18"
                          width="18"
                          color="white"
                          ariaLabel="oval-loading"
                        />{" "}
                        <p>Signing In...</p>
                      </div>
                    ) : (
                      <div>Sign In</div>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
            {/* <div className="flex-1 hidden md:flex items-center justify-center -my-6 -mr-6">
              <Image
                width={1000}
                height={1000}
                priority={true}
                src="/images/inbox.jpg"
                alt="inbox image"
                className=" max-w-full h-full rounded-tl-none rounded-bl-none rounded-lg shadow-lg object-cover"
              />
            </div> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
