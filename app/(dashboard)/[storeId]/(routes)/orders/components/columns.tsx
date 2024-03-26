"use client";

import { ColumnDef } from "@tanstack/react-table";

export type OrderColumn = {
  id: string;
  phone: string;
  address: string;
  isPaid: boolean;
  totalPrice: string;
  products: string;
  createdAt: string;
};

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Ürünler",
  },
  {
    accessorKey: "phone",
    header: "Tel",
  },
  {
    accessorKey: "address",
    header: "Adres",
  },
  {
    accessorKey: "totalPrice",
    header: "Toplam fiyat",
  },
  {
    accessorKey: "isPaid",
    header: "Ödendi",
  },
  {
    accessorKey: "createdAt",
    header: "Tarih",
  },
];
