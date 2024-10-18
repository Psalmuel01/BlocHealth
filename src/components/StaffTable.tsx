import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { BookmarkIcon, TrashIcon } from "@radix-ui/react-icons";

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV008",
        paymentStatus: "Paid",
        totalAmount: "$400.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV009",
        paymentStatus: "Paid",
        totalAmount: "$500.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV010",
        paymentStatus: "Pending",
        totalAmount: "$600.00",
        paymentMethod: "Credit Card",
    },
]

const StaffTable = () => {
    return (
        <Table>
            <TableHeader className="bg-[#1D1A77]">
                <TableRow className="font-clash_medium border-none shadow-sm">
                    <TableHead className="text-white text-center">Name</TableHead>
                    <TableHead className="text-white text-center">Wallet Address</TableHead>
                    <TableHead className="text-white text-center">Phone Number</TableHead>
                    <TableHead className="text-white text-center">Email Address</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="text-gray-300text-center ">
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice} className="border-[#2924A6]/50">
                        <TableCell className="text-center font-medium border-r border-[#2924A6]/50">{invoice.invoice}</TableCell>
                        <TableCell className="text-center border-r border-[#2924A6]/50">{invoice.paymentStatus}</TableCell>
                        <TableCell className="text-center border-r border-[#2924A6]/50">{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-center border-r border-[#2924A6]/50">{invoice.totalAmount}</TableCell>
                        <TableCell className="flex justify-center gap-5">
                            <BookmarkIcon color="green" className="cursor-pointer w-5 h-5" />
                            <TrashIcon className="cursor-pointer w-5 h-5" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default StaffTable;
