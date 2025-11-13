import { ArrowUpRightIcon, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import AddGameDialog from "./dialogs/AddGameDialog";
import { useTranslation } from "react-i18next";

const EmptyGamesList = () => {
  const { t } = useTranslation();
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Gamepad2 />
        </EmptyMedia>
        <EmptyTitle>{t("EMPTY.TITLE")}</EmptyTitle>
        <EmptyDescription>
          {t("EMPTY.MESSAGE")}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <AddGameDialog isEditMode={false} />
        </div>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  );
};

export default EmptyGamesList;
