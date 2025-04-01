const ImportGood = require("../models/importGood.model");

// Lấy danh sách hàng nhập
exports.getImportGood = async (req, res) => {
    try {
        const good = await ImportGood.find();
        res.status(200).json(good);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm hàng nhập mới
exports.createImportGood = async (req, res) => {
    try {
        const newGood = new ImportGood(req.body);
        await newGood.save();
        res.status(201).json(newGood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật hàng nhập
exports.updateImportGood = async (req, res) => {
    try {
        const updatedGood = await ImportGood.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedGood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa hàng nhập
exports.deleteImportGood = async (req, res) => {
    try {
        await ImportGood.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Import Good deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
