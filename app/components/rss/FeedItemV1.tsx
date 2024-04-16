'use client'

import { useState, useRef, useEffect } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { deleteRssFeed } from "@/app/lib/rss";

interface FeedItemV1Props {
    feedId: number,
    content: string,
    onclick: (feedId: number) => void,
}

export default function FeedItemV1(props: FeedItemV1Props) {

    const handleDeleteFeed = () => {
        console.log(`removing feed id ${props.feedId}`)
        deleteRssFeed(props.feedId)        
    }

    return (
        <div className="w-full text-slate-200 min-h-8
        hover:bg-stone-500 hover:rounded-md my-1 py-1">
            <div className="flex w-full items-center">
                <div className="w-11/12 pl-2 py-1 line-clamp-1"
                onClick={(e) => props.onclick(props.feedId)}
                >
                    {props.content}
                </div>
                <div className="w-1/12 rounded-full"
                onClick={handleDeleteFeed}>
                    <MdOutlineDelete/>
                </div>
            </div>
        </div>
    )
}