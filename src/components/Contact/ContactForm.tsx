import { useBreakpointValue, VStack } from "@chakra-ui/react";
import ContactInput from "./ContactInput";
import ContactTextarea from "./ContactTextarea";

interface Props {
  values: {
    name: string;
    email: string;
    phone: number | string;
    subject: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setMessageLines: React.Dispatch<React.SetStateAction<number>>;
}

const ContactForm = ({
  values,
  handleChange,
  handleBlur,
  setMessageLines,
}: Props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <VStack align="stretch" w="full" minW={isMobile ? "300px" : "auto"}>
      <ContactInput
        name="name"
        value={values.name}
        handleChange={handleChange}
        handleBlur={handleBlur}
        placeholder='"Your name"'
      />

      <ContactInput
        name="email"
        value={values.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        placeholder='"your.email@example.com"'
      />

      <ContactInput
        name="phone"
        value={values.phone}
        handleChange={handleChange}
        handleBlur={handleBlur}
        placeholder='"Your phone number"'
        type="number"
      />

      <ContactInput
        name="subject"
        value={values.subject}
        handleChange={handleChange}
        handleBlur={handleBlur}
        placeholder='"Message subject"'
      />

      <ContactTextarea
        name="message"
        value={values.message}
        handleChange={handleChange}
        handleBlur={handleBlur}
        placeholder='"Your message here..."'
        setMessageLines={setMessageLines}
      />
    </VStack>
  );
};

export default ContactForm;
