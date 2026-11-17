import { useEffect, useRef, useState } from "react";

import { MailIcon } from "lucide-react";

import FloatingMailButton, {
  floatingMailButtonoptions,
} from "@/components/contact-form/floating-mail-button";
import ContactFormModal from "@/components/contact-form/contact-form-modal";
import ComingSoonModal from "@/components/contact-form/coming-soon-modal";

const IS_MAIL_FEATURE_ENABLED = false;

export default function ContactButton() {
  const refSendBtn = useRef<HTMLButtonElement>(null);

  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsBtnVisible(!entry.isIntersecting);
  };

  const handleContactClick = () => {
    if (IS_MAIL_FEATURE_ENABLED) {
      setIsOpenModal(true);
    } else {
      setIsComingSoonOpen(true);
    }
  };

  useEffect(() => {
    const btn = refSendBtn.current;
    const observer = new IntersectionObserver(
      observerCallback,
      floatingMailButtonoptions,
    );
    if (btn) observer.observe(btn);
    return () => {
      if (btn) observer.unobserve(btn);
    };
  }, [refSendBtn]);

  return (
    <>
      {isBtnVisible && !isOpenModal && !isComingSoonOpen && (
        <FloatingMailButton
          openModal={
            IS_MAIL_FEATURE_ENABLED ? setIsOpenModal : setIsComingSoonOpen
          }
        />
      )}

      <button
        ref={refSendBtn}
        className="inline-flex items-center gap-2 rounded-md bg-background px-3 py-2 text-accent transition-transform duration-150 focus-within:scale-[1.05] hover:scale-[1.05] hover:bg-foreground hover:text-background"
        onClick={handleContactClick}
      >
        <MailIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-9 lg:w-9" />
        <span className="text-base font-semibold sm:text-lg lg:text-xl">
          Send Message
        </span>
      </button>

      <ContactFormModal showModal={isOpenModal} setShowModal={setIsOpenModal} />
      <ComingSoonModal
        showModal={isComingSoonOpen}
        setShowModal={setIsComingSoonOpen}
      />
    </>
  );
}
