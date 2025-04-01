const Supplier = require("../models/supplier.model");

// Lấy danh sách nhà cung cấp
exports.getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm nhà cung cấp mới
exports.createSupplier = async (req, res) => {
    try {
        const newSupplier = new Supplier(req.body);
        await newSupplier.save();
        res.status(201).json(newSupplier);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật nhà cung cấp
exports.updateSupplier = async (req, res) => {
    try {
        const updatedSupplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedSupplier);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa nhà cung cấp
exports.deleteSupplier = async (req, res) => {
    try {
        await Supplier.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Supplier deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
