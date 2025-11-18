import { AppFooter } from "@/modules/general/components/app-footer";
import { NavigationBar } from "@/modules/general/components/navigation-bar";
import { TopbarNotification } from "@/modules/general/components/topbar-notification";

interface MainLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <main>
      <TopbarNotification>
        <span>Just Launched! Get early access before pricing goes live.</span>
      </TopbarNotification>

      {/* Navigation Bar */}
      <NavigationBar />

      {children}
      <AppFooter />
    </main>
  );
}
