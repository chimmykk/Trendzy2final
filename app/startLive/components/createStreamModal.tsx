"use client"

import { FormikWizard } from "formik-wizard-form";
import * as Yup from "yup";
import Visibility from "./Visibility";
import Details from "./Details";
import { useState } from "react";
import { FaEye, FaInfo } from 'react-icons/fa'
import { FormikProps, FormikHelpers } from "formik";
import { FormikValues } from "formik";
import { useSession } from "next-auth/react";
import CreateChannel from "@/app/createChannel/page";


interface RenderProps extends FormikProps<FormikValues> {
  /** Handler to be called on previous button click */
  handlePrev: () => void;

  /** Handler to be called on next button click */
  handleNext: () => void;

  /** Current step index in number */
  currentStepIndex?: number;

  /** Flag to indicate previous button should be disabled */
  isPrevDisabled: boolean;

  /** Flag to indicate next button should be disabled */
  isNextDisabled: boolean;

  /** Flag to indicate current step is first step */
  isFirstStep: boolean;

  /** Flag to indicate current step is last step */
  isLastStep: boolean;

  /** Current step component renderer */
  renderComponent: () => React.ReactNode;
}



export default function App() {
    const { data: session } = useSession();
    const [showPreview, setShowPreview] = useState(false); // Add state for showing the preview
    const [submittedData, setSubmittedData] = useState<any | null>(null);

  const onSubmit = async (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
    const { title, tags, visibility, thumbnail } = values;
    console.log(session?.user?.email);
    console.log(session?.user?.name)
    console.log(thumbnail)
    // Get the email from the session
    const email = session?.user?.email;
    const name  = session?.user?.name
   
    const firstWord = name?.split(' ')[0];
    
    if (!email) {
      console.error('No user email found in session.');
      return;
    }
    if (!name) {
      console.error('No user user found in session.');
      return;
    }

    // Construct the request body
    const requestBody = {
      title,
      tags,
      visibility,
      email,// Include the email in the request body
      thumbnail,
      name:firstWord // Include the name in the request body
    };

     setSubmittedData(requestBody);

    // Display alert with form values
    const combinedMessage = `Form Values: ${JSON.stringify({ ...values, Email: email, Name :name }, null, 2)}`;
    console.log(combinedMessage); // append email+form value

    // Make a POST request to the API endpoint
    try {
      const response = await fetch('https://trendzy2.vercel.app/api/flow/postget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        alert('Channel data updated successfully');
      } else {
        alert('Failed to update channel data');
      }
    } catch (error) {
      console.error('Error updating channel data:', error);
      alert('An error occurred while updating channel data');
    }
    setShowPreview(true);
  };
  return (
    <div className=" relative bg-[#1E1F22] text-white my-[41.4px] h-[480px]  overflow-y-scroll  overflow-x-hidden w-[800px] mx-auto rounded-lg shadow-lg">
      {showPreview ? ( // Conditionally render the preview page
      <div className="w-full h-full flex justify-center items-center">
        <CreateChannel />
        {/* submittedData={submittedData} */}
      </div>
      ) : (
      <FormikWizard
        initialValues={{ goLiveWith: 'webcam', category: 'men'}}
        onSubmit={onSubmit}
        validateOnNext
        activeStepIndex ={0}
        steps={[
          {
            component: Details,
            validationSchema: Yup.object().shape({
              title: Yup.string().required('Title is required'),
              tags: Yup.string(),
              category: Yup.string().oneOf(['men', 'women']),
              thumbnail: Yup.mixed().required('Thumbnail required')
            }),
          },
          {
            component: Visibility,
            validationSchema: Yup.object().shape({
              visibility: Yup.string()
                .required('Visibility option is required')
                .oneOf(['GoLiveNow', 'ScheduleLater'], 'Invalid visibility option'),
                  scheduledDateTime: Yup.string().when('visibility', {
                is: 'ScheduleLater',
                then: (fieldSchema) =>
                  fieldSchema
                    .required('Scheduled date and time are required when scheduling')
                    .matches(
                      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
                      'Scheduled date and time must be in the format YYYY-MM-DDTHH:mm'
                    ),
              }),
              }),
          },
        
        ]}
      >
      {(props) => {
            const {
              currentStepIndex,
              renderComponent,
              handlePrev,
              handleNext,
              isNextDisabled,
              isPrevDisabled,
              isValid,
              isSubmitting,
              values,
            } = props;

            return (
              <>
                  <div className=" overflow-y-scroll sticky top-0 bg-[#1E1F22] text-white w-[800px] mx-auto rounded-lg z-0 shadow-lg">
                        <div className={`border-b border-[#444458] py-3 z-10`}>
                            <h1 className="px-6 font-semibold text-xl">Create stream</h1>   
                        </div>   
                            <div className="flex items-center px-40 py-8">
                              <div className={`flex items-center text-bgGreen relative ${currentStepIndex === 0 ? 'font-medium' : ''}`}>
                                <div className={`absolute top-0 -ml-10 text-center -mt-6 w-32 text-xs uppercase ${currentStepIndex === 0 ? 'text-bgGreen' : 'text-white'}`}>Details</div>
                                {currentStepIndex === 0 ? (
                      <div className="rounded-full transition duration-500 ease-in-out h-8 w-8 py-3 border-2 bg-bgGreen border-borderC">
                      </div>
                        ) : (
                          <div className="rounded-full transition duration-500 ease-in-out h-8 w-8 border-2 bg-bgGreen border-borderC flex items-center justify-center">
                          <span className="text-white">&#10003;</span>
                        </div>
                      )}
                      
                    </div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-borderC"></div>
                    <div className={`flex items-center text-white relative ${currentStepIndex === 1 ? 'font-medium' : ''}`}>
                      <div className={`absolute top-0 -ml-10 text-center -mt-6 w-32 text-xs uppercase ${currentStepIndex === 1 ? 'text-bgGreen' : 'text-white'}`}>Visibility</div>
                      <div className={`rounded-full transition duration-500 ease-in-out h-8 w-8 border-2 ${currentStepIndex === 1 ? 'bg-bgGreen border-borderC' : 'border-white'}`}>
                      </div>
                    </div>
                  </div>
                </div>
                <div>{renderComponent()}</div>
                <div className=" sticky bottom-0 bg-[#1E1F22]  py-4 border-t border-[#494444] bg flex justify-end gap-8 px-32">
                  <button
                    disabled={isPrevDisabled}
                    onClick={handlePrev}
                  >
                    Back
                  </button>
                  <button
                    disabled={!isValid || isSubmitting}
                    onClick={handleNext}
                    className=""
                  >
                    {currentStepIndex === 1 ? "Finish" : "Next"}
                  </button>
                </div>
                <div>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </div>
              </>
            );
          }}
  </FormikWizard> 
      )}       
    </div>
  );
}
