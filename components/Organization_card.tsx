import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";

import Link from "next/link"
import { Button } from "./ui/button";

const Organization_card = ({organizations}: {organizations: org_type}) => {
    const { _createdAt,name, views, author: {_id: author_id, Reputation }, _id, description, image, category, title} = organizations;
  return (
    <li className="org-card group">
        <div className="flex-between">
            <p className="org_card_date">
                {formatDate(_createdAt)}
            </p>
            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-primary"/>
                <span className="text-16-medium">{views}</span>
            </div>
        </div>
        <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/user/${author_id}`}>
                    <p className="text-16-bold line-clamp-1">
                        {Reputation} .at.
                    </p>
                </Link>
                <Link href={`/org/${_id}`}>
                    <h3 className="text-26-semibold line-clamp-1">{name}</h3>
                </Link>
            </div>
            <Link href={`/user/${author_id}`}>
                <img src={image} alt="image" width={48} height={48} className="rounded-full"/> 
            </Link>
        </div>

        <Link href={`/org/${_id}`}>
            <p className="org-card_desc">
                {description}
            </p>

            <img src={image} alt=""  className="org-card_img"/>
        </Link>

        <div className="flex-between gap-3 mt-5">
            <Link href={`/?query=${category}`}>
                <p className="text-16-medium">{category}</p>
            </Link>
            <Button className="org-card_btn" asChild>
                <Link href={`/org/${_id}`}>
                    Илүү ихийг ..
                </Link>
            </Button>
        </div>
    </li>
  )
}

export default Organization_card