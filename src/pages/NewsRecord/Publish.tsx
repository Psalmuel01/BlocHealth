import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export function Publish() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size='lg' className='bg-[#2924A6]'>Publish record</Button>
            </DialogTrigger>
            <DialogContent className="bg-[#0A092C] h-60 flex flex-col items-center justify-center max-md:max-w-[425px]">
                <DialogHeader className="w-2/3">
                    <DialogTitle className="font-clash_semibold">Continue to Publish Record</DialogTitle>
                    <DialogDescription className="text-sm">
                        Are you sure you want to publish this patient's record?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex gap-3 justify-center mt-5">
                    <DialogClose><Button type="submit" className="bg-[#2924A6]">Proceed to Publish</Button></DialogClose>
                    <DialogClose><Button variant="outline" className="bg-transparent border-[#2924A6]">Cancel</Button></DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    )
}