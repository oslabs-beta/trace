import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList,
    useDisclosure
} from '@chakra-ui/react'
import { IconType } from 'react-icons';
import NavHoverBox from './navhoverbox'

type Props = {
  icon: IconType;
  title: string;
  path: string;
  description?: string;
  active?: boolean;
  navSize: string;
};

export default function NavItem({ icon, title, path, description, active=false, navSize }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Flex
          mt={30}
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
      >
          <Menu 
            placement="right"
            isOpen={isOpen}
          >
              <Link
                  backgroundColor={active ? "#AEC8CA" : 'white'}
                  p={3}
                  borderRadius={8}
                  _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
                  w={navSize == "big" ? "100%" : 'auto'}
                  path={path}
              >
                  <MenuButton 
                    w="100%"
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                  >
                      <Flex>
                          <Icon as={icon} fontSize="l" color={active ? "#82AAAD" : "gray.500"} />
                          <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                      </Flex>
                  </MenuButton>
              </Link>
              <MenuList
                  py={0}
                  border="none"
                  w={200}
                  h={200}
                  ml={5}
              >
                  
                  <NavHoverBox title={title} icon={icon} description={description} />
              </MenuList>
          </Menu>
      </Flex>
  )
}
