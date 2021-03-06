import {
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorMode,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { BiClipboard } from 'react-icons/bi';
import { useBoxShadow } from '../hooks/useBoxShadow';
import { shortenAddress } from '../utils/helpers';

interface IDataFieldProps {
  label: string;
  value?: string | number | boolean;
  canCopy?: boolean;
}

function DataField({ label, value, canCopy }: IDataFieldProps) {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'gray.50' : 'gray.900';
  const { boxShadowXs, boxShadowSmInset } = useBoxShadow();
  const toast = useToast();
  const copyAddress = (value: string) => {
    navigator.clipboard.writeText(value);
    toast({
      title: 'Copied to clipboard',
      description: value.length > 10 ? shortenAddress(value) : value,
      status: 'success',
      duration: 2000,
    });
  };
  return (
    <Stack
      w="100%"
      p={5}
      bgColor={bgColor}
      borderRadius="xl"
      spacing={0.1}
      position="relative"
      boxShadow={boxShadowSmInset}
    >
      <Text fontSize="xs" color="gray.500">
        {label}
      </Text>

      <Text fontSize="2xl" fontWeight="bold" fontFamily="mono">
        {value || '-'}
      </Text>
      {canCopy && value && (
        <IconButton
          boxShadow={boxShadowXs}
          position="absolute"
          size="xs"
          top={5}
          right={5}
          aria-label="Copy address to clipboard"
          onClick={() => copyAddress(value?.toString())}
          icon={<BiClipboard />}
        />
      )}
    </Stack>
  );
}

export default DataField;
