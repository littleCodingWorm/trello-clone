import { DeleteCard } from "@/actions/delete-card";
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
import { Draggable } from "@hello-pangea/dnd";
import { CopyIcon, Pen, Table2Icon, TrashIcon } from "lucide-react";
import React from "react";

const CardItem = ({
  index,
  card,
  listId,
  boardId,
}: {
  index: number;
  card: any;
  listId: string;
  boardId: string;
}) => {
  async function handleDeleteCard(cardId: string) {
    const deletedCard = await DeleteCard({ cardId, boardId });
  }
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <li>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            role="button"
            className="group rounded-md border bg-white  transition hover:bg-gray-200"
          >
            <div className="flex items-center justify-between p-2">
              <span className="font-[500]">{card.title}</span>
              <Dialog>
                <DialogTrigger>
                  <Pen className="hidden h-4 w-4 text-muted-foreground group-hover:block" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center justify-start gap-1">
                      <Table2Icon className="h-6 w-6" /> Card Name
                    </DialogTitle>
                    <DialogDescription>in List name</DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-between  gap-4">
                    <div className="flex w-full flex-col gap-2">
                      <span className="font-semibold">Description</span>
                      {/* <Form {...form}> */}
                      <form action="">
                        <textarea
                          className="w-full rounded-md bg-secondary p-2"
                          placeholder="card description..."
                        />
                      </form>
                      {/* </Form> */}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold">Actions</span>
                      <Button
                        className="flex items-center justify-start gap-1 text-base font-semibold"
                        variant="secondary"
                      >
                        <CopyIcon /> Copy
                      </Button>
                      <Button
                        className="flex items-center justify-start gap-1 text-base font-semibold"
                        variant="secondary"
                        onClick={() => handleDeleteCard(card.id)}
                      >
                        <TrashIcon /> Delete
                      </Button>
                    </div>
                  </div>
                  <DialogFooter>activity</DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default CardItem;
