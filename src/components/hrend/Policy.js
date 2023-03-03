import React from "react";
import { useState } from "react";

function Policy() {
  const [category, setCategory] = useState(1);

  return (
    <div className="w-3/4 mx-auto my-16">
      <h2 className="sm:text-3xl mx-auto text-center text-xl font-medium title-font mb-8">
        Privacy and Policy
      </h2>
      <ul
        class="mb-2 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
      >
        <li role="presentation" class="flex-auto text-center">
          <div
            class={`cursor-pointer hover:bg-[#047EC1]/5 my-2 block border-x-0 border-t-0 border-b-2 px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tighthover:isolate ${
              category === 1
                ? "text-[#047EC1] border-[#047EC1]"
                : " text-neutral-500  border-transparent"
            }`}
            onClick={(event) => {
              event.preventDefault();
              setCategory(1);
            }}
          >
            LEAVE POLICY
          </div>
        </li>
        <li role="presentation" class="flex-auto text-center">
          <div 
            class={`cursor-pointer hover:bg-[#047EC1]/5 my-2 block border-x-0 border-t-0 border-b-2 px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tighthover:isolate ${
              category === 2
                ? "text-[#047EC1] border-[#047EC1]"
                : " text-neutral-500  border-transparent"
            }`}
            onClick={(event) => {
              event.preventDefault();
              setCategory(2);
            }}
          >
            RESIGNATION POLICIES
          </div>
        </li>
        <li role="presentation" class="flex-auto text-center">
          <div 
            class={`cursor-pointer hover:bg-[#047EC1]/5 my-2 block border-x-0 border-t-0 border-b-2 px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tighthover:isolate ${
              category === 3
                ? "text-[#047EC1] border-[#047EC1]"
                : " text-neutral-500  border-transparent"
            }`}
            onClick={(event) => {
              event.preventDefault();
              setCategory(3);
            }}
          >
            TERMINATION POLICIES
          </div>
        </li>
        <li role="presentation" class="flex-auto text-center">
          <div 
            class={`cursor-pointer hover:bg-[#047EC1]/5 my-2 block border-x-0 border-t-0 border-b-2 px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tighthover:isolate ${
              category === 4
                ? "text-[#047EC1] border-[#047EC1]"
                : " text-neutral-500  border-transparent"
            }`}
            onClick={(event) => {
              event.preventDefault();
              setCategory(4);
            }}
          >
            ONBOARDING POLICIES
          </div>
        </li>
        <li role="presentation" class="flex-auto text-center">
          <div 
            class={`cursor-pointer hover:bg-[#047EC1]/5 my-2 block border-x-0 border-t-0 border-b-2 px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tighthover:isolate ${
              category === 5
                ? "text-[#047EC1] border-[#047EC1]"
                : " text-neutral-500  border-transparent"
            }` }
            onClick={(event) => {
              event.preventDefault();
              setCategory(5);
            }}
          >
            OFFBOARDING POLICIES
          </div>
        </li>
        <li role="presentation" class="flex-auto text-center">
          <div 
            class={`cursor-pointer hover:bg-[#047EC1]/5 my-2 block border-x-0 border-t-0 border-b-2 px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tighthover:isolate ${
              category === 6
                ? "text-[#047EC1] border-[#047EC1]"
                : " text-neutral-500  border-transparent"
            }`}
            onClick={(event) => {
              event.preventDefault();
              setCategory(6);
            }}
          >
            EMPLOYEE BEHAVIOUR
          </div>
        </li>
        <li role="presentation" class="flex-auto text-center">
          <div 
            class={`cursor-pointer hover:bg-[#047EC1]/5 my-2 block border-x-0 border-t-0 border-b-2 px-4 pt-4 pb-3.5 text-xs font-medium uppercase leading-tighthover:isolate ${
              category === 7
                ? "text-[#047EC1] border-[#047EC1]"
                : " text-neutral-500  border-transparent"
            }`}
            onClick={(event) => {
              event.preventDefault();
              setCategory(7);
            }}
          >
            OTHERS
          </div>
        </li>

      </ul>
      <div className="mb-12 w-full mx-auto border-t-2"></div>
      <div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 1 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            There are no leaves during your probation period. And, the probation period is for 6 months.
            </li>
            <li>
            You are granted 1.5 leaves per month after your probation period gets over.
            </li>
            <li>
            In case, there are any medical emergencies or any other family related emergencies, leaves without pay can be granted. The leaves can be granted only if informed to reporting lead & HR through email. And, approval of the same must be received.
            </li>
            <li>
            Planned leaves must be informed at least 3 days prior to taking leaves.
            </li>
            <li>
            In case, if you take 3 consecutive leaves without informing your reporting lead & HR, the company holds the right to terminate your employment without any notice.
            </li>
            <li>
            Your office hours are set to be 9 hours. If there are 22 working days that means you are bounded to have a total of 198 hours of working in a month.
            </li>
            <li>
           During your leave, you are bound to manage your work either yourself or you can take help from your colleagues.
            </li>
            <li>
            The Company may change its policy to have alternate or all Saturdays working for the entire office or for certain teams as per the requirement of the project or performance of the employee or the team.
            </li>
            <li>
           The company has set the Maternity leave to be 3 months. You will be paid half of your salary during this period.
            </li>
            <li>
            The company has set the paternity leave to be 1 week. You will be paid full of your salary during this period.
            </li>
            <li>
            You cannot take a sandwich leave. That is, you cannot take continuous leaves on Friday and Monday. In any case if you do so, the salary for 4 days will be deducted.
            </li>
            <li>
            Company holds the right to cancel your pre-approved leaves if your work is getting hampered. So, it is advised that if you go on leave, you must take care of your work.
            </li>
            <li>
            In case if your planned leave or leaves stands cancelled and then also you take leaves then company will issue a warning to you. And the salary cut will be there as per the leaves taken.
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 2 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            During your probation period, your notice period will be 2 weeks.
            </li>
            <li>
            After you get appointed, the notice period will be of 2 Months.
            </li>
            <li>
            In case you are willing to resign, it is advised that you should discuss this matter with your reporting lead.
            </li>
            <li>
          For resignation, employee is requested to submit an Email to the reporting lead and HR and seek for their acceptance.
            </li>
            <li>
            Once the acceptance email is received from the reporting lead or HR, your notice period will commence.
            </li>
            <li>
            There are no leaves during your notice period.
            </li>
            <li>
            In case, you take leaves during your notice period, either same number of days will get added to your notice period or the payment will get deducted from the salary.
            </li>
            <li>
            During your notice period, the first month salary will be credit to your bank account as normal salaries get credited but the second month salary will be credited to your account within 45 days from your last day of notice period.
            </li>
            <li>
            During your Notice period you are bound to perform well and take care of the projects you are handling. In case the company finds out any abnormality in your behavior during NP then it holds the right to either increase the NP or may terminate your NP without pay.
            </li>
            <li>
            You are bound to not spread the news of your resignation among your colleagues.
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 3 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            The company holds the right to terminate you in the following conditions: 
            <div class="mb-6 ">
        
         
          <ul class="marker:text-[#047EC1] mt-3 list-disc pl-5 space-y-3 text-slate-500">
            <li>
            You are found damaging or bringing any harm to company assets
            </li>
            <li>
            You are found consuming alcohol or any kind of drug during working hours.
            </li>
            <li>
            You are accessing the company data or any company assets for your personal use.
            </li>
            <li>
            You are found to submit false or fake documents to the company.
            </li>
            <li>
            Your poor performance.
            </li>
            <li>
           You are found stealing any company assets.
            </li>
            <li>
            You are found using foul language with any of your colleagues.
            </li>
            <li>
            You are found using physical violence during working hours.
            </li>
            <li>
            You are found mistreating any of your colleagues.
            </li>
            <li>
            You are found not abiding the company policies.
            </li>
            <li>
            You are found to be indulged in any criminal case.
            </li>
            <li>
            You are found to be mentally unstable.
            </li>
            <li>
            You are found to be taken 3 consecutive leaves without informing your reporting lead and HR.
            </li>
            <li>
            If you receive 3 warning mails regarding your work performance/completion of working hours/ defy of HR Policies etc.
            </li>
          </ul>
        </div>
            </li>
            <li>
            The HR will send you an official email stating the company’s interest in your termination.
            </li>
            <li>
            Once you receive the termination, that will be your last day with the company.
            </li>
            <li>
            The 2 months’ salary will be credited in parts on in full within 45 days from your last day.
            </li>
            <li>
            On the day of termination, you are bound to handover the company assets (Hardware, Data, bag, phone etc.) to your reporting lead.
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 4 ? "block" : "hidden"
          } opacity-100 transition-opacity duration-150 ease-linear`}
        >
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            Once the interview is cleared, the desired candidate will get an email from HR stating the offer to join McLine Studios.
            </li>
            <li>
            Candidate are bound to confirm their joining in the email to <a className="text-[#047EC1]"> hr@mclinestudios.net </a>
            </li>
            <li>
            The reporting time on the first day is 11:00 AM.
            </li>
            <li>
            Employee are bound to submit all the desired documents to HR within 3 days of their joining.
            </li>
            <li>
            The employee will get offer letter within 1.5 weeks from their first day in the office.
            </li>
            <li>
            The employees are bound to sign a ‘form of allotment’ containing the information about the company assets they will be allotted during their tenure with the company. The FOA states that they take the responsibility of every asset they are allotted.
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 5 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            In case you are willing to resign, it is advised that you should discuss this matter with your reporting lead.
            </li>
            <li>
            For resignation, employee is requested to submit an Email to the reporting lead and HR and seek for their acceptance.
            </li>
            <li>
            Once the acceptance email is received from the reporting lead or HR, your notice period will commence.
            </li>
            <li>
            There are no leaves during your notice period.
            </li>
            <li>
            In case, you take leaves during your notice period, either same number of days will get added to your notice period or the payment will get deducted from the salary.
            </li>
            <li>
            During your notice period, the first month salary will be credit to your bank account as normal salaries get credited but the second month salary will be credited to your account within 45 days from your last day of notice period.
            </li>
            <li>
            During your Notice period you are bound to perform well and take care of the projects you are handling. In case the company finds out any abnormality in your behavior during NP then it holds the right to either increase the NP or may terminate your NP without pay.
            </li>
            <li>
            During your NP, you are bound to train your replacement with all your knowledge.
            </li>
            <li>
            You are bound to not spread the news of your resignation among your colleagues.
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 6 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
          <li>
            During you probation, you will be monitored in terms of your behavior and efforts to learn the work quickly.
            </li>
            <li>
            Keep your desk or workplace clean and organized.
            </li>
            <li>
            Put down phone during the meetings – however when you are in meeting it’s not advised to be texting, or browsing the web.
            </li>
            <li>
            It is advised that you keep your phone silent during your working hours.
            </li>
            <li>
            Be polite and professional in all communication form – for phone, email and meeting face-to-face, it’s important to remain professional.
            </li>
            <li>
            Consider your body language – do not sit inappropriately in the office.
            </li>
            <li>
            Give your undivided attention – give your full attention to others during conversation. If you speak over someone else, apologize for the error.
            </li>
            <li>
            Avoid gossips – how you treat people reflects on your character, and if you speak negatively about your coworker, people might associate you with that negativity.
            </li>
            <li>
            Don’t spend much time on phone.
            </li>
            <li>
            During your employment in the company, you are legally bounded to not engage directly or indirectly in any business or freelance work of the same nature of business the company is involved in.
            </li>
            <li>
            You cannot indulge in any business or non-business activities with company clients, associates of company clients, their vendors directly or indirectly after relieving the company for next 5 years. If you are found to be failed in doing so, then company holds the right to go legal against you.
            </li>






          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 7 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
          <h2 className="text-[#047EC1] mb-2 font-normal" >ATTIRE/DRESSING</h2>
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            Dress appropriately – modest attire is typically the best choice.
            </li>
            <li>
            You are bound to make your ID cards an essential part of your attire.
            </li>
            <li>
            You are bound to follow the basic cleanliness etiquettes.
            </li>
            <li>
            You are bound to follow basic hygiene etiquettes.
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 7 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
         <h2 className="text-[#047EC1] mb-2 font-normal" >SOCIAL MEDIA PERSONAL IDS</h2>
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            Do not use company social media accounts for any personal use.
            </li>
            <li>
            You are bound to not access your social media profiles on company phone or laptops.
            </li>
            <li>
           You are bound to not use company laptop or phones for any personal use.
            </li>
            <li>
            If you are found not following the above policies, the company holds the right to take actions against you.
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 7 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
         <h2 className="text-[#047EC1] mb-2 font-normal" >TIMING</h2>
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            Be on time and complete your working hours.
            </li>
            <li>
            And, avoid being out of office for more than 10 mins during office hours. (Lunch time is an exception)
            </li>
            <li>
            Your office hours are set to be 9 hours. If there are 22 working days that means you are bounded to have a total of 198 hours of working in a month.
            </li>
            <li>
            In case you are found not completing the working hours in a month, the HR department can take action against you.
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 7 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
          <h2 className="text-[#047EC1] mb-2 font-normal" >DATA</h2>
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            




          <li>
            During your tenure with the company, you are bound to hold the secrecy of the company documents or the data you handle.
            </li>
            <li>
            You are bound to not share the company data with anyone else.
            </li>
            <li>
            You are bound to not access company data from your personal device.
            </li>
            <li>
            You are bound to not transfer the company data in any storage devices.
            </li>
            <li>
            In case any breach of the data is found at your end, the company holds the right to terminate your employment and the company will go legal in this matter.
            </li>
          </ol>
        </div>
      </div>
      
      <div class="mb-6 ">
        <div
          class={`${
            category === 7 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
          <h2 className="text-[#047EC1] mb-2 font-normal" >SALARY</h2>
         
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            	You are bound to open accounts in specified banks as directed by the company.
            </li>
            <li>
            	Do not disclose your salary with other fellow associates
            </li>
            <li>
            	The monthly salary will get credited between 5 – 8 of every month.
            </li>
            <li>
            	In case you find any issue with the credited salary, you hold to right to discuss about the same with HR.
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 7 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
         <h2 className="text-[#047EC1] mb-2 font-normal" >COMPANY ASSETS</h2>
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            	The employees are bound to sign a ‘form of allotment’ containing the information about the company assets they will be allotted during their tenure with the company. The FOA states that they take the responsibility of every asset they are allotted.
            </li>
            <li>
            	During your tenure with the company, you are bound to hold the secrecy of the company documents or the data you handle.
            </li>
            <li>
            	You are bound to share the company data with anyone else.
            </li>
            <li>
            You are bound to not access company data from your personal device.
            </li>
            <li>
            You are bound to not transfer the company data in any storage devices.
            </li>
            <li>
            In case any breach of the data is found at your end, the company holds the right to terminate your employment and the company will go legal in this matter.
            </li>
          </ol>
        </div>
      </div>
      <div class="mb-6 ">
        <div
          class={`${
            category === 7 ? "block" : "hidden"
          } opacity-0 opacity-100 transition-opacity duration-150 ease-linear`}
        >
         <h2 className="text-[#047EC1] mb-2 font-normal" >RETIREMENT POLICIES</h2>
          <ol class="marker:text-[#047EC1] list-decimal pl-5 space-y-3 text-slate-500">
            <li>
            Employment in the company will stand terminated at the end of the financial year in which you attain the age of superannuation (60 years).
            </li>
          </ol>
        </div>
      </div>
            
    </div>
    </div>
  );
}

export default Policy;
