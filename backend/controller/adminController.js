import Admin from "../models/AdminSchema.js";

export const updateAdmin = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Successfully updated.", data: updatedAdmin });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to update." });
    }
}

export const deleteAdmin = async (req, res) => {
    const id = req.params.id;

    try {
        await Admin.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully deleted." });
    }
    catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete." });
    }
}

export const getSingleAdmin = async (req, res) => {
    const id = req.params.id;

    try {
        const Admin = await Admin.findById(id).select("-password").select("-role");

        res.status(200).json({ success: true, message: "User found.", data: Admin });
    }
    catch (err) {
        res.status(404).json({ success: false, message: "User not found" });
    }
}

