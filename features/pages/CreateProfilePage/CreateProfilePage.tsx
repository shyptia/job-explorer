import React, { useState } from "react";
import { Formik, Form } from "formik";
import { FormInput, FormTextarea } from "@/features/components/FormFields";
import { CreateProfileSchema } from "./schema";
import { getLocalStorageItem } from "./getLocalStorageItem";
import { PageLayout } from "@/features/components/PageLayout";

const NAME_KEY = "name";
const JOB_TITLE_KEY = "desiredJobTitle";
const ABOUT_ME_KEY = "aboutMe";

const initialValues = {
  name: getLocalStorageItem(NAME_KEY),
  desiredJobTitle: getLocalStorageItem(JOB_TITLE_KEY),
  aboutMe: getLocalStorageItem(ABOUT_ME_KEY),
};

export function CreateProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <PageLayout title="Create Profile">
      <Formik
        initialValues={initialValues}
        validationSchema={CreateProfileSchema}
        onSubmit={({ name, aboutMe, desiredJobTitle }) => {
          if (typeof window !== "undefined") {
            localStorage.setItem(NAME_KEY, name);
            localStorage.setItem(JOB_TITLE_KEY, desiredJobTitle);
            localStorage.setItem(ABOUT_ME_KEY, aboutMe);
          }
          setIsEditing(false);
        }}
      >
        {({ isValid }) => (
          <Form className="space-y-5 flex flex-col items-center">
            <FormInput label="Name" name="name" disabled={!isEditing} />

            <FormInput
              label="Desired Job Title"
              name="desiredJobTitle"
              disabled={!isEditing}
            />

            <FormTextarea
              label="About me"
              name="aboutMe"
              disabled={!isEditing}
            />

            <div className="flex justify-end">
              {!isEditing && (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="mr-2 px-4 py-2 bg-yellow text-white rounded-lg"
                >
                  Edit
                </button>
              )}

              <button
                type="submit"
                disabled={!isValid || !isEditing}
                className="px-5 bg-blue-10 text-white py-2 rounded-lg hover:bg-blue-20 outline-none disabled:bg-grey-10"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </PageLayout>
  );
}
