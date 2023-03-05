import { BsPaperclip } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { ImageContainer } from "./ImageUploadStyles";

interface ImageUploadProps {
  selectedImage: File | null;
  setSelectedImage: (file: File) => void;
}

export const ImageUpload = ({selectedImage, setSelectedImage} : ImageUploadProps) => {
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const imageChange = (e: React.ChangeEvent<HTMLInputElement>, files: FileList | null) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }

    console.log(files);
    setSelectedImage(files![0]);

    const icon = document.getElementById("icon");
    if (icon) {
      icon.style.display = "none";
    }
  };

  const removeImage = () => {
    setSelectedImage(null as any);
    const icon = document.getElementById("icon");

    if (icon) {
      icon.style.display = "block";
    }
  };

  return (
    <div>
      <label htmlFor="file">
        <BsPaperclip id="icon" size={25} cursor="pointer" />
      </label>
      <input
        type="file"
        id="file"
        onChange={(e) => imageChange(e, e.target.files)}
        style={{ display: "none" }}
      />
      {selectedImage && (
        <ImageContainer id="image-container">
          <img
            width={50}
            src={URL.createObjectURL(selectedImage)}
            alt="preview"
          />
          <IoCloseSharp size={15} onClick={removeImage} cursor="pointer" />
        </ImageContainer>
      )}
    </div>
  );
};
