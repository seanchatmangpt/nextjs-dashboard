import Image from "next/image";
import { formatDateToLocal } from "@/app/lib/utils";
import { fetchFilteredInquiries, fetchInvoicesPages } from "@/app/lib/data";

async function InquiriesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const inquiries = await fetchFilteredInquiries(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {/* Responsive view for mobile */}
          <div className="md:hidden">
            {inquiries?.map((inquiry) => (
              <div
                key={inquiry.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="mb-2 text-lg font-medium">
                      {inquiry.subject}
                    </p>
                    <p className="text-sm text-gray-500">
                      {inquiry.name} - {inquiry.email}
                    </p>
                  </div>
                  <p className="text-sm">
                    {formatDateToLocal(inquiry.created_at)}
                  </p>
                </div>
                <p className="pt-4 text-gray-700">{inquiry.message}</p>
              </div>
            ))}
          </div>
          {/* Table view for larger screens */}
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Subject
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Message
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {inquiries?.map((inquiry) => (
                <tr
                  key={inquiry.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {inquiry.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {inquiry.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {inquiry.subject}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {inquiry.message}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(inquiry.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string; page?: number };
}) {
  const query = searchParams?.query || "";
  const currentPage = searchParams?.page || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <>
      <InquiriesTable currentPage={currentPage} query={query} />
    </>
  );
}
