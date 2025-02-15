import { Button } from "@heroui/react";
import { NavLink } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";


const NeedSupport = () => {
  return (
    <>
      <section className="max-w-[1920px] text-center m-auto py-16 px-[5%] md:px-[10%] space-y-4">
        <h2 className="text-xl md:text-2xl font-semibold">
          Need Support? We&apos;re Here to Help
        </h2>
        <p className="md:text-lg">
          We&apos;re committed to ensuring that your experience with us is
          smooth and enriching. If you have any queries or need assistance at
          any step, please contact us
        </p>

        <Button
          as={NavLink}
          size="lg"
          to="mailto:support.TPO@gmail.com"
          variant="flat"
          startContent={<MdMarkEmailUnread />}
        >
          tpogecsiwan@gmail.com
        </Button>
      </section>
    </>
  );
}

export default NeedSupport