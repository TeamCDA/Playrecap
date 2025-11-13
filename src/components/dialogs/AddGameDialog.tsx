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
import type Game from "@/models/Game";
import { Plus } from "lucide-react";
import { useTranslation } from "react-i18next";
// import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import GameTypeSelector from "../game/GameTypeSelector";

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
  const { t } = useTranslation();
  const open = externalOpen;
  const setOpen = externalOnOpenChange;
  const [gameType, setGameType] = useState("game");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {!isEditMode && (
        <DialogTrigger
          asChild
          onClick={() => {
            const activeEl = document.activeElement;
            if (activeEl instanceof HTMLElement) {
              activeEl.blur();
            }
          }}
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="h-5 w-5" />
            {t("BUTTON.ADD.GAME")}
          </Button>
        </DialogTrigger>
      )}
      <DialogContent
        className="sm:max-w-[425px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
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
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Titre du jeu</FieldLabel>
                <Input
                  id="tilte"
                  autoComplete="off"
                  placeholder="Arc Raiders"
                />
                <FieldDescription>
                  This appears on invoices and emails.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" autoComplete="off" />
                <FieldError>Choose another username.</FieldError>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="finish" />
                <FieldLabel htmlFor="finish">Jeux fini</FieldLabel>
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                  Year
                </FieldLabel>
                <Select defaultValue="">
                  <SelectTrigger id="checkout-7j9-exp-year-f59">
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                    <SelectItem value="2028">2028</SelectItem>
                    <SelectItem value="2029">2029</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              {/* TYPE GAME */}
              <GameTypeSelector gameType={gameType} setGameType={setGameType} />

              <Field orientation="vertical">
                <FieldLabel htmlFor="note">Note</FieldLabel>
                <Textarea id="note" placeholder="Type your message here." />
              </Field>
            </FieldGroup>
          </FieldSet>
          <DialogFooter>
            <div
              className={`${isEditMode && "flex justify-between w-full"} mt-8`}
            >
              {isEditMode && (
                <Button
                  type="button"
                  variant={"destructive"}
                  onClick={() => alert("delete")}
                >
                  Delete
                </Button>
              )}
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
