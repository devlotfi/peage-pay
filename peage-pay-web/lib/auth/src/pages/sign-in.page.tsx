import { ButtonOutline, Heading, MinimalNavbar } from "@peage-pay-web/ui";
import SignInPageTabs, {
  SignInTabsEnum,
} from "../components/sign-in/sign-in-page-tabs.component";
import { useState } from "react";
import SignInWithEmailForm from "../components/sign-in/sign-in-with-email-form.component";
import SignInWithGoogleForm from "../components/sign-in/sign-in-with-google-form.component";
import SignInWithPhoneForm from "../components/sign-in/sign-in-with-phone-form.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { Toll } from "@peage-pay-web/assets";
import { Link } from "react-router-dom";

interface SignInPageProps {
  title: string;
}

const SignInPage = ({ title }: SignInPageProps): JSX.Element => {
  const [tab, setTab] = useState<SignInTabsEnum>(SignInTabsEnum.EMAIL);

  const renderTabContent = () => {
    switch (tab) {
      case SignInTabsEnum.EMAIL:
        return <SignInWithEmailForm></SignInWithEmailForm>;
      case SignInTabsEnum.GOOGLE:
        return <SignInWithGoogleForm></SignInWithGoogleForm>;
      case SignInTabsEnum.PHONE:
        return <SignInWithPhoneForm></SignInWithPhoneForm>;
    }
  };

  return (
    <div className="flex flex-col bg-base-200 min-h-screen bg-cover text-base-content">
      <MinimalNavbar>
        <MinimalNavbar.LeftContent></MinimalNavbar.LeftContent>
        <MinimalNavbar.RightContent></MinimalNavbar.RightContent>
      </MinimalNavbar>
      <div className="flex flex-1 justify-center mt-0 lg:m-0 md:items-center">
        <div className="flex w-full md:w-[80%] md:mb-[5rem] p-[1rem] md:p-[1.5rem] md:max-w-[55rem] bg-base-100 rounded-none md:rounded-xl flex-col-reverse justify-end lg:flex-row border-[0px] md:border-[1px] border-edge-200">
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
              <Heading className="text-[27pt] lg:text-[23pt] mb-[1rem] flex justify-center">
                <Heading.Icon position={"left"}>
                  <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>
                </Heading.Icon>
                <Heading.Text>Sign in</Heading.Text>
              </Heading>
              <SignInPageTabs
                value={tab}
                onChange={(value) => setTab(value)}
              ></SignInPageTabs>
              {renderTabContent()}
            </div>
            <div className="flex bg-edge-100 h-[1px] my-[1.5rem] justify-center relative">
              <div className="flex bg-base-100 rounded-full justify-center items-center h-[2.3rem] w-[2.3rem] absolute translate-y-[-50%]">
                Or
              </div>
            </div>
            <Link to={"/sign-up"} className="flex w-full">
              <ButtonOutline className="flex w-full" variant={"primary"}>
                <ButtonOutline.Content>Sign up</ButtonOutline.Content>
              </ButtonOutline>
            </Link>
          </div>
          <div className="bg-edge-100 w-[1px] my-[1rem] mx-[1.5rem] hidden lg:flex"></div>
          <div className="flex flex-col">
            <div className="flex justify-between text-[17pt] items-center">
              <div className="flex mr-[1.5rem]">PeagePay Adminstration</div>
              <FontAwesomeIcon
                className="text-[25pt] text-primary-100"
                icon={faUserGear}
              ></FontAwesomeIcon>
            </div>
            <div className="flex text-[13pt] opacity-70 lg:mt-[0.7rem]">
              {title}
            </div>
            <img
              className="hidden lg:flex max-h-[20rem]"
              src={Toll}
              alt="toll"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
