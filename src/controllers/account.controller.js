const Account = require("../models/account.model");

// Lấy danh sách tài khoản
exports.getAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Thêm tài khoản mới
exports.createAccount = async (req, res) => {
    try {
        const newAccount = new Account(req.body);
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật tài khoản
exports.updateAccount = async (req, res) => {
    try {
        const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa tài khoản
exports.deleteAccount = async (req, res) => {
    try {
        await Account.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Account deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
