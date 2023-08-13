"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadProfilePic() {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploadStatus, setUploadStatus] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadError, setUploadError] = useState(false);
    const [uploadErrorMessage, setUploadErrorMessage] = useState("");

    const router = useRouter();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setFile(selectedFile);
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setFile(null);
            setPreview(null);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("accesstoken");
        const formData = new FormData();
        formData.append("profilePic", file);
        // console.log(formData.profilePic);
        try {
            const response = await fetch("http://localhost:8000/imageupoad/uploadprofilepic", {
                method: "POST",
                headers: {
                    // "content-type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    const percentage = Math.floor((loaded / total) * 100);
                    setUploadPercentage(percentage);
                },
            });
            const data = await response.json();
            if (data.success) {
                setUploadStatus(true);
                setUploadSuccess(true);
                setUploadError(false);
                setUploadErrorMessage("");
                setTimeout(() => {
                    router.push("/login/getmyprofile");
                }, 2000);
            } else {
                setUploadStatus(true);
                setUploadSuccess(false);
                setUploadError(true);
                setUploadErrorMessage(data.error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="bg-black text-white">
            <div className="flex flex-col items-center text-center justify-center">
                {/* Upload Profile Pic API */}
                <h1 className="text-yellow">Upload Profile Pic</h1>
                <form className="flex flex-col items-center text-center justify-center" onSubmit={handleUpload}>
                    <input
                        type="file"
                        name="profilePic"
                        id="profilePic"
                        className="w-fit-content text-white"
                        onChange={handleFileChange} />
                    {preview && (
                        <Image
                            src={preview}
                            alt="Profile Pic"
                            className="profilePic pb-8"
                            width={200}
                            height={200}>
                        </Image>
                    )}
                    <button className="custom-button-2 my-5" type="submit">Upload</button>
                    {uploadStatus && (
                        <div className="flex flex-col gap-6">
                            {uploadSuccess && (
                                <p style={{ color: "green" }}>Profile Pic Uploaded Successfully</p>
                            )}
                            {uploadError && (
                                <p style={{ color: "red" }}>{uploadErrorMessage}</p>
                            )}
                        </div>
                    )}
                </form>
                <button className="custom-button-1 my-5" type="submit" onClick={() => router.push("/login/getmyprofile")}>
                    Back
                </button>
            </div>
        </main>
    );
}
