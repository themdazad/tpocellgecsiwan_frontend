// Login page where Coordinators, Incharge and Student can login to their Dashboard.
// This page related components are located at src/Components/Authentication/Login
import React from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@heroui/react";
import PopOver from "../../../components/Authentication/Login/PopOver";

import { MdAdminPanelSettings } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

export default function LoginPage() {
  const [selected, setSelected] = React.useState("login");

  return (
    <div className="max-w-[1440px] min-h-screen m-auto flex flex-col justify-center items-center w-full py-20">
      <Card className="max-w-full w-[340px] h-auto">
        <h1 className="text-center py-3 text-lg font-bold text-primary">Dashboard Login</h1>
        <CardBody className="overflow-hidden">
          {/* Admin Login Form  */}
          <Tabs
            fullWidth
            aria-label="Tabs form"
            selectedKey={selected}
            size="md"
            onSelectionChange={setSelected}
          >
            <Tab  key="admin" title={
              <p className="text-center text-primary flex items-center gap-2"> <MdAdminPanelSettings /> Admin</p>
              
            }>
              <form className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Forgot your password?{" "}
                  <Link size="sm" onPress={() => setSelected("sign-up")}>
                    Contact Developer
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button type="submit" fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>

            {/* Student Login Form  */}
            <Tab key="Student" title={
              <p className="text-center text-primary flex items-center gap-2"> <PiStudentBold /> Student</p>
              
            }>
              <form className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Registration Number"
                  placeholder="eg. xx1xx151xxx"
                  type="registration_no"
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <div className="text-center flex gap-2 ">
                  <p className="flex gap-2 text-primary text-small"></p>
                  Need to an account?{" "}
                  <span className="text-center flex gap-2 text-primary text-small">
                    <PopOver tittle={"Create Account"} PopOverMessage={"Contact Student Coordinator for an account."} />
                  </span>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button type="submit" fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
