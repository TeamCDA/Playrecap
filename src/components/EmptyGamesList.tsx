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

const EmptyGamesList = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Gamepad2 />
        </EmptyMedia>
        <EmptyTitle>No games yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t added any games yet. Get started by add
          your first game.
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
