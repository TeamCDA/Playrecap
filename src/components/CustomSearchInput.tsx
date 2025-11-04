import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const CustomSearchInput = ( { setSearch } : Props) => {
  return (
    <div className="w-full max-w-sm">
      <InputGroup className="bg-white">
        <InputGroupInput placeholder="Search game..." onChange={(e) => setSearch(e.target.value)} />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
      </InputGroup>
    </div>
  );
};

export default CustomSearchInput;
