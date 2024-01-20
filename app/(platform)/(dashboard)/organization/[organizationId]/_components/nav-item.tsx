import Image from "next/image";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Layout, Activity, Settings, CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

const NavItem = ({ organization }: { organization: Organization }) => {
  const router = useRouter();

  const routes = [
    {
      label: "Boards",
      icon: <Layout className="mr-2 h-4 w-4" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="mr-2 h-4 w-4" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="mr-2 h-4 w-4" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  function handleClick(href: string) {
    router.push(href);
  }

  return (
    <AccordionItem value={organization.id}>
      <AccordionTrigger className="flex">
        <div className="flex items-center justify-center gap-2">
          <div className="relative h-7 w-7">
            <Image
              src={organization.imageUrl}
              width={28}
              height={28}
              alt={organization.name + "image"}
            />
          </div>
          <span>{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {routes.map((route) => (
          <Button
            key={route.href}
            onClick={() => handleClick(route.href)}
            className="flex w-full items-center justify-start pl-10"
            variant="ghost"
          >
            {route.icon}
            {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default NavItem;
