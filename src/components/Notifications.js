
import { Button, Popover, Portal, Text } from "@chakra-ui/react";


const Notifications = () => {
  return (
    <Popover.Root lazyMount unmountOnExit>
      <Popover.Trigger asChild>
        <Button size="sm" variant="outline">
          <img
                src="/icons/icone_notificacoes.svg"
                alt="Ícone Notificações"
                width={25}
                className="cursor-pointer"
            />
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content css={{ "--popover-bg": "#FBBC1F" }}>
            <Popover.Arrow />
            <Popover.Body>
              <Popover.Title fontWeight="medium"><b>Notificação</b></Popover.Title>
              <Text my="4">
                Naruto is a Japanese manga series written and illustrated by
                Masashi Kishimoto.
              </Text>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}

export default Notifications;