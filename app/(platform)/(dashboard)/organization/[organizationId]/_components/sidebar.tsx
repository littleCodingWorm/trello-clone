import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Org name</AccordionTrigger>
        <AccordionContent>
          <Button className="w-full" variant="ghost">
            Boards
          </Button>
          <Button className="w-full" variant="ghost">
            Boards
          </Button>
          <Button className="w-full" variant="ghost">
            Boards
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Sidebar;
