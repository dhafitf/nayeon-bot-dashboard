import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

export default function DevResponseModal({ isOpen, handleCancel }: { isOpen: boolean; handleCancel: () => void }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleCancel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#46494D] p-5 text-left align-middle text-white shadow-xl transition-all">
                <div className="flex justify-between">
                  <Dialog.Title as="h3" className="text-lg font-bold leading-6">
                    Development Process
                  </Dialog.Title>
                  <IoMdClose onClick={handleCancel} className="cursor-pointer text-3xl transition-all duration-300 hover:rotate-90 hover:font-bold" />
                </div>
                <div className="mt-3 mb-4 h-[2px] rounded bg-[#6e7072]"></div>
                The dev icon means the page or feature is under development.
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
