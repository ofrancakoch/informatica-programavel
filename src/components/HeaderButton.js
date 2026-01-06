import { Button, Menu, Portal } from "@chakra-ui/react"
import { Nome } from "./FuncaoNome";
import { ChevronDown } from "lucide-react";

const HeaderButton = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
            <div className="flex justify-center items-center px-2">
                <b className="pr-2"> <Nome nome="Octávio França"/> </b>
                <ChevronDown/>   
            </div>            
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt-a">
              New Text File <Menu.ItemCommand>⌘E</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="new-file-a">
              New File... <Menu.ItemCommand>⌘N</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="new-win-a">
              New Window <Menu.ItemCommand>⌘W</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="open-file-a">
              Open File... <Menu.ItemCommand>⌘O</Menu.ItemCommand>
            </Menu.Item>
            <Menu.Item value="export-a">
              Export <Menu.ItemCommand>⌘S</Menu.ItemCommand>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default HeaderButton;