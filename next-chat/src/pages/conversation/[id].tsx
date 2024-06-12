import { ConversationSidebar } from "@/components/conversations/conversationSidebar"
import { ConversationPanel } from "@/components/conversations/conversionPanel";
import React from 'react';

const Conversation = () => {

    return (<div>
        <div className="flex flex-row">
            <div className="basis-1/6 bg-slate-600 border-r-2 border-indigo-500">
                <ConversationSidebar />
            </div>
            <div className="basis-5/6">
                <ConversationPanel />
            </div>
        </div>
    </div>)
}

export default Conversation