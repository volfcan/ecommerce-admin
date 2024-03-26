"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  size: string;
  category: string;
  color: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Ad",
  },
  {
    accessorKey: "isArchived",
    header: "Arşiv",
  },
  {
    accessorKey: "isFeatured",
    header: "Öne çıkarıldı",
  },
  {
    accessorKey: "price",
    header: "Fiyat",
  },
  {
    accessorKey: "category",
    header: "Kategori",
  },
  {
    accessorKey: "size",
    header: "Beden",
  },
  {
    accessorKey: "color",
    header: "Renk",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.color }}
        />
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Tarih",
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
