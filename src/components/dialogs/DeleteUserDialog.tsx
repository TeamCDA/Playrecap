import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, TrashIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const DeleteUserDialog = () => {
  // const { removeUser } = useProfile();

  const { t } = useTranslation();
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">{t("DIALOG.DELETE.BUTTON")}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("DIALOG.DELETE.TITLE")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("DIALOG.DELETE.MESSAGE")}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <ArrowLeftIcon />
            {t("BUTTON.CANCEL")}
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button variant="destructive" onClick={() => alert("delete service")}>
              <TrashIcon />
              {t("DIALOG.DELETE.BUTTON")}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteUserDialog;
