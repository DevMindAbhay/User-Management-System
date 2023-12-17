const Customer = require('../models/Customer');
const mongoose = require('mongoose');

/**
 * GET /
 * Homepage
 */
exports.homepage = async (req, res) => {
    try {
        const perPage = 5;
        const page = req.query.page || 1;

        const customers = await Customer.aggregate([{ $sort: { createdAt: -1 } }])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

        const count = await Customer.countDocuments();

        const locals = {
            title: 'Nodejs',
            description: 'Free Nodejs User Management System',
        };

        res.render('index', {
            locals,
            customers,
            current: page,
            pages: Math.ceil(count / perPage),
            message: await req.flash('info'),
        });
    } catch (error) {
        console.log(error);
    }
};

/**
 * GET /
 * About
 */
exports.about = async (req, res) => {
    const locals = {
      title: "About",
      description: "Free NodeJs User Management System",
    };
  
    try {
      res.render("about", locals );
    } catch (error) {
      console.log(error);
    }
  };
  

/**
 * GET /
 * New Customer Form
 */
exports.addCustomer = (req, res) => {
    const locals = {
        title: 'New Customer Added',
        description: 'Free Nodejs User Management System',
    };
    res.render('customer/add', locals);
};

/**
 * POST /
 * Create New Customer
 */
exports.postCustomer = async (req, res) => {
    console.log(req.body);

    const newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        tel: req.body.tel,
        email: req.body.email,
        details: req.body.details,
    });

    try {
        await newCustomer.save();
        req.flash('info', 'New customer has been added.');
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
};

/**
 * GET /
 * Customer Data
 */
exports.view = async (req, res) => {
    try {
      const customer = await Customer.findOne({ _id: req.params.id });
  
      const locals = {
        title: "View Customer Data",
        description: "Free NodeJs User Management System",
      };
  
      res.render("customer/view", {
        locals,
        customer,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  /**
 * GET /
 * Edit Customer Data
 */
exports.edit = async (req, res) => {
    try {
      const customer = await Customer.findOne({ _id: req.params.id });
  
      const locals = {
        title: "Edit Customer Data",
        description: "Free NodeJs User Management System",
      };
  
      res.render("customer/edit", {
        locals,
        customer,
      });
    } catch (error) {
      console.log(error);
    }
  };

  
/**
 * POST /
 * Update Customer Data
 */
exports.editPost = async (req, res) => {
    try {
        await Customer.findByIdAndUpdate(req.params.id, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            details: req.body.details,
            updatedAt: Date.now(),
        });

        res.redirect(`/edit/${req.params.id}`);

        console.log("redirected");
    } catch (error) {
        console.log(error);
    }
};

/**
 * Delete /
 * Delete Customer Data
 */
exports.deleteCustomer = async (req, res) => {
    try {
      await Customer.deleteOne({ _id: req.params.id });
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  /**
 * Get /
 * Search Customer Data
 */

exports.searchCustomers = async (req, res) => {
  const locals = {
    title: "Search Customer Data",
    description: "Free NodeJs User Management System",
  };

  try {
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const customers = await Customer.find({
      $or: [
        { firstName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        { lastName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
      ],
    });

    res.render("search", {
      customers,
      locals,
    });
  } catch (error) {
    console.log(error);
  }
};

