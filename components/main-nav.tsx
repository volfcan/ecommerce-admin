"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Genel",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Afişler",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Kategoriler",
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Boyutlar",
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Renkler",
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Ürünler",
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Siparişler",
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Ayarlar",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "hover:text-primary text-sm font-medium transition-colors",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
