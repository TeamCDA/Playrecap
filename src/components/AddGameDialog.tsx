import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type Game from "@/models/Game";
import { Plus } from "lucide-react";

interface AddGameDialogProps {
  //   onGameAdded: () => void;
  game?: Game | null;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  isEditMode: boolean;
}

const AddGameDialog = ({
  game,
  open: externalOpen,
  onOpenChange: externalOnOpenChange,
  isEditMode,
}: AddGameDialogProps) => {
  const open = externalOpen;
  const setOpen = externalOnOpenChange;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {!isEditMode && (
        <DialogTrigger asChild>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="h-5 w-5" />
            Ajouter un jeu
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-[425px]"  onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>
            {isEditMode
              ? `Modifier le jeu ${game?.title}`
              : `Ajouter un nouveau jeu`}
          </DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" />
            </div>
          </div>
          <DialogFooter>
            <div className={`${isEditMode && 'flex justify-between w-full'} mt-5`}>
              {isEditMode && <Button type="button" variant={"destructive"} onClick={() => alert("delete")}>Delete</Button>}
              <div className="flex gap-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </div>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddGameDialog;
