import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/libs/utils";
import { TypeGameList } from "@/helpers/TypeGameList";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  gameType: string;
  setGameType: Dispatch<SetStateAction<string>>;
};

const GameTypeSelector = ({ gameType, setGameType }: Props) => {
  return (
    <Field orientation="vertical">
      <FieldLabel htmlFor="type">Type</FieldLabel>

      <RadioGroup
        value={gameType}
        onValueChange={setGameType}
        className="flex w-full gap-2"
      >
        {TypeGameList.map((type) => (
          <Label
            key={type.value}
            htmlFor={type.value}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors",
              "hover:bg-accent/50",
              gameType === type.value &&
                "border-blue-600 bg-blue-50 dark:border-blue-900 dark:bg-blue-950"
            )}
          >
            {/* Animation de fond quand sélectionné */}

            {/* Contenu */}
            <div className="relative z-10 flex items-center gap-3 w-full">
              <RadioGroupItem
                value={type.value}
                id={type.value}
                className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
              />
              {type.name}
            </div>
          </Label>
        ))}
      </RadioGroup>
    </Field>
  );
};

export default GameTypeSelector;
