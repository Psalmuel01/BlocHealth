import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { BookmarkIcon, TrashIcon } from "@radix-ui/react-icons";

const shortenAddress = (address) => {
    if (address.length > 16) {
      const start = address.slice(0, 14);
      const end = address.slice(-4);
      return `${start}...${end}`;
    }
    return address;
  };
  

const staffs = [
    {
        name: "Dr. Johnson Sule",
        address: shortenAddress("0x2ds887dj2od98dklns887dj2od98dklns82od98"),
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        name: "Dr. Peace Alo",
        address: shortenAddress("0x2ds887dj2od98dklns887dj2od98dklns82od98"),
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        name: "Dr. Johnson Sule",
        address: shortenAddress("0x2ds887dj2od98dklns887dj2od98dklns82od98"),
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        name: "Dr. Peace Alo",
        address: shortenAddress("0x2ds887dj2od98dklns887dj2od98dklns82od98"),
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        name: "Dr. Johnson Sule",
        address: shortenAddress("0x2ds887dj2od98dklns887dj2od98dklns82od98"),
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        name: "Dr. Peace Alo",
        address: shortenAddress("0x2ds887dj2od98dklns887dj2od98dklns82od98"),
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        name: "Dr. Johnson Sule",
        address: shortenAddress("0x2ds887dj2od98dklns887dj2od98dklns82od98"),
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        name: "Dr. Peace Alo",
        address: shortenAddress("0x2ds887dj2od98dklns887dj2od98dklns82od98"),
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        name: "Dr. Johnson Sule",
        address: shortenAddress("0x2ds887dj2od98dklns887dj2od98dklns82od98"),
        totalAmount: "$250.00",
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
                {staffs.map((staff, index) => (
                    <TableRow key={index} className="border-[#2924A6]/50">
                        <TableCell className="text-center font-medium border-r border-[#2924A6]/50">{staff.name}</TableCell>
                        <TableCell className="text-center border-r border-[#2924A6]/50">{staff.address}</TableCell>
                        <TableCell className="text-center border-r border-[#2924A6]/50">{staff.paymentMethod}</TableCell>
                        <TableCell className="text-center border-r border-[#2924A6]/50">{staff.totalAmount}</TableCell>
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
