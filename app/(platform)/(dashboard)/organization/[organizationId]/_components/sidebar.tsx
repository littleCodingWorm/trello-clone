"use client";

import React from "react";
import NavItem from "./nav-item";
import { Accordion } from "@/components/ui/accordion";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Organization } from "./nav-item";

const Sidebar = () => {
  // get the org list
  const { organization, isLoaded: isLoadedOrg } = useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  return (
    <Accordion type="multiple" className="w-full">
      {userMemberships.data?.map(({ organization }) => (
        <NavItem
          key={organization.id}
          organization={organization as Organization}
        />
      ))}
    </Accordion>
  );
};

export default Sidebar;
