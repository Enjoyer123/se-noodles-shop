import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    return (
        <div class="h-16 px-12 bg-black flex items-center justify-between sticky top-0 z-50">
            <div class="flex items-center">
                <div class="bg-white rounded-full p-2 w-12 h-12 flex items-center justify-center">
                    <Image src="/1.jpg" alt="" width="32" height="32" />
                </div>
                <div class="ml-5 text-white">
                    <div class="text-sm font-semibold">ORDER NOW!</div>
                </div>
            </div>
            <div class="flex items-center space-x-8">
                <ul class="flex items-center space-x-8 text-white">
                    <Link href="/" passHref>
                        <li class="font-semibold">Homepage</li>
                    </Link>
                    <li class="font-semibold">Products</li>
                    <li class="font-semibold">Menu</li>
                    <Image src="/2.jpg" alt="" width="50" height="69" />
                    <li class="font-semibold">Events</li>
                    <li class="font-semibold">Blog</li>
                    <li class="font-semibold">Contact</li>
                </ul>
                <Link href="/cart" passHref>
                     <div className="relative"> 
                        <div class="flex items-center">
                            <Image src="/cart.png" alt="" width="40" height="40" />
                            <div class="absolute top-0 left-7 w-6 h-6 bg-white rounded-full flex items-center justify-center font-bold text-red-600">4</div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
            );
};

export default Navbar;
